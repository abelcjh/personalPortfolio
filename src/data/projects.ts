export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  /** Public site, demo, or docs */
  liveUrl?: string;
  /** Source repository */
  repoUrl?: string;
};

/**
 * Edit this list to showcase your work. Each project can link to a live URL,
 * a GitHub repo, or both.
 */
export const projects: Project[] = [
  {
    id: "personal-portfolio",
    title: "Personal portfolio",
    description:
      "This site — a fast, static showcase for projects with a calm, editorial layout and room for long-form descriptions.",
    tags: ["React", "TypeScript", "Vite"],
    // Set your deployed URL when you publish (e.g. GitHub Pages).
    liveUrl: undefined,
    repoUrl: "https://github.com/YOUR_USERNAME/personalPortfolio",
  },
  {
    id: "starter-example",
    title: "Your next project",
    description:
      "Replace this card with a real project: what it does, who it is for, and what you learned. You can omit liveUrl if it is library-only.",
    tags: ["Tag one", "Tag two"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/YOUR_USERNAME/your-repo",
  },
];
