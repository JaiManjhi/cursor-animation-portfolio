"""Remove checkerboard remnants (light grey speckles + halo) from the hair of the cut-out.

Only touches the hair band above the shoulders and never the face, which is
protected by an ellipse. Light, colourless pixels there become transparent and
the leftover soft edge is darkened so no grey fringe shows on the red background.
"""
import sys
from PIL import Image, ImageDraw, ImageFilter

src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGBA")
W, H = im.size
px = im.load()

face = Image.new("L", im.size, 0)
ImageDraw.Draw(face).ellipse((250, 118, 526, 470), fill=255)
fp = face.load()

HAIR_BOTTOM = 400
for y in range(min(HAIR_BOTTOM, H)):
    for x in range(W):
        r, g, b, a = px[x, y]
        if a == 0 or fp[x, y]:
            continue
        luma = 0.299 * r + 0.587 * g + 0.114 * b
        sat = max(r, g, b) - min(r, g, b)
        if luma > 150 and sat < 28:
            px[x, y] = (r, g, b, 0)

# Clean the alpha: drop lone specks, soften the edge.
alpha = im.getchannel("A")
hair_band = Image.new("L", im.size, 0)
ImageDraw.Draw(hair_band).rectangle((0, 0, W, HAIR_BOTTOM), fill=255)
hair_band = Image.composite(Image.new("L", im.size, 0), hair_band, face)
cleaned = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(0.6))
alpha = Image.composite(cleaned, alpha, hair_band)
im.putalpha(alpha)

# Darken semi-transparent hair-edge pixels so any remaining fringe reads as hair.
px = im.load()
hb = hair_band.load()
for y in range(min(HAIR_BOTTOM, H)):
    for x in range(W):
        r, g, b, a = px[x, y]
        if hb[x, y] and 0 < a < 235:
            k = 0.35
            px[x, y] = (int(r * k), int(g * k), int(b * k), a)

im.save(out, optimize=True)
print("cleaned", im.size)
