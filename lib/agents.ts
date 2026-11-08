export interface AgentDef {
  name: string;
  color: string;
}

export const AGENTS: AgentDef[] = [
  { name: "Scout", color: "#60a5fa" },
  { name: "Layout", color: "#facc15" },
  { name: "Typeset", color: "#34d399" },
  { name: "Motion", color: "#f472b6" },
  { name: "QA", color: "#a78bfa" },
  { name: "Deploy", color: "#fb923c" },
  { name: "Copy", color: "#22d3ee" },
  { name: "Lint", color: "#e4e4e7" },
  { name: "Index", color: "#4ade80" },
  { name: "Render", color: "#c084fc" },
  { name: "Palette", color: "#fde047" },
  { name: "Review", color: "#f87171" },
];

/** What an agent claims to be doing, keyed by the element's data-agent value. */
export const ACTIONS: Record<string, string[]> = {
  text: ["rewriting", "kerning", "proofreading", "tightening copy", "setting type"],
  block: ["aligning grid", "testing hover", "measuring spacing", "auditing contrast", "wiring layout"],
  image: ["colour grading", "masking edges", "checking crop"],
  data: ["verifying numbers", "cross-checking resume"],
  link: ["checking link", "testing focus ring"],
};
