import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Anton, Caveat_Brush, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--nf-anton", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--nf-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--nf-mono", display: "swap" });
const brush = Caveat_Brush({ weight: "400", subsets: ["latin"], variable: "--nf-brush", display: "swap" });

export const metadata: Metadata = {
  title: "Jai Manjhi — Software Engineer",
  description:
    "Portfolio of Jai Manjhi, Software Engineer at Eveneez and Computer Science student in Indore. React Native, Node.js, MongoDB and AI-assisted development.",
  openGraph: {
    title: "Jai Manjhi — Software Engineer",
    description: "Mobile apps, backends and AI-assisted workflows. Built live by an agent swarm.",
    images: ["/jai-bw.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

/**
 * Runs before first paint so the page starts empty for the agents to build.
 * Order: ?agents=on|off, then the viewer's last dock toggle, then the OS reduced-motion setting.
 */
const BUILD_MODE_SCRIPT = `(function(){try{var d=document.documentElement,q=new URLSearchParams(location.search).get('agents'),s=null;try{s=localStorage.getItem('agents')}catch(e){}var r=matchMedia('(prefers-reduced-motion: reduce)').matches;if(q?q!=='off':s?s==='on':!r)d.classList.add('build-mode')}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${anton.variable} ${geist.variable} ${mono.variable} ${brush.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BUILD_MODE_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
