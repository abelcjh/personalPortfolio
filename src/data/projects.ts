import { PortfolioCardProps } from "../App.tsx";

export const projects: PortfolioCardProps[] = [
  {
    title: "Personal portfolio",
    description:
      "This site — a fast, static showcase for projects with a calm, editorial layout and room for long-form descriptions.",
    tags: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/abelcjh/personalPortfolio",
  },
  {
    title: "VoiceBridge",
    description:
      "A comprehensive platform using AI in STT, translation, and TTS to bridge communication between different ethnic groups in ASEAN \
      for disaster response. Also uses AI in automated reporting.",
    tags: ["React Native", "TypeScript", "Groq", "ElevenLabs", "Google Cloud", "Supabase", "Node.js", "Express", "Zustand"],
    repoUrl: "https://github.com/pangtengg/borneohack",
  },
];
