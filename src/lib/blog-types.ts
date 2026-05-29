export type BlogCategory =
  | "Piles Treatment"
  | "Fissure"
  | "Fistula"
  | "Laser Surgery"
  | "Diet & Lifestyle"
  | "Recovery";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; variant: "info" | "warning"; text: string }
  | { type: "grades"; items: { grade: string; desc: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "steps"; items: { title: string; desc: string }[] };

export interface BlogSection {
  id: string;
  heading: string;
  blocks: BlogBlock[];
}

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  date: string;
  author: string;
  authorTitle: string;
  title: string;
  excerpt: string;
  readTime: string;
  sections: BlogSection[];
}
