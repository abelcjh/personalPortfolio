import { PortfolioCardProps } from "../pages/PortfolioPage.tsx";

export const projects: PortfolioCardProps[] = [
  {
    title: "Personal portfolio",
    description:
      "This site — a fast, static showcase for projects with a calm, editorial layout and room for long-form descriptions.",
    tags: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/abelcjh/personalPortfolio"
  },
  {
    title: "VoiceBridge",
    description:
      "A comprehensive platform using AI in STT, translation, and TTS to bridge communication \
      between different ethnic groups in ASEAN for disaster response. Also uses AI in automated \
      reporting. Completed with my team for BorNEO HackWknd 2026.",
    tags: ["React Native", "TypeScript", "Groq", "ElevenLabs", "Google Cloud", "Supabase", "Node.js", "Express", "Zustand"],
    liveUrl: "https://youtu.be/9AA6Z2woAgk",
    repoUrl: "https://github.com/pangtengg/borneohack",
    liveButtonText: "Watch video"
  },
  {
    title: "Hashtag trend classifier",
    description: "Predicts hashtag and topic trends (emerging, peaking, decaying, uncertain) \
    from YouTube video metadata and corresponding comments metadata. Completed with my \
    team for Loreal Monash Datathon 2025.",
    tags: ["HuggingFace", "BERT", "LSTM", "FastAPI", "Streamlit", "Python"],
    liveUrl: "https://youtu.be/mNPMDZHjB9I",
    repoUrl: "https://github.com/abelcjh/loreal-monash-datathon-2025",
    liveButtonText: "Watch video"
  },
  {
    title: "RostalQ",
    description: "Intelligent, automated nurse scheduling system designed to optimize hospital \
    workforce management. Completed with my team for AWS Great Malaysia AI Hackathon \
    2025.",
    tags: ["Next,js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "Supabase",
              "Google OR-Tools", "XGBoost", "Vercel", "AWS"
    ],
    liveUrl: "https://drive.google.com/file/d/1PIrAnL4WX6tOyhspLhbD_Vb2Z81RP0HX/view", 
    repoUrl: "https://github.com/DoneWithWork/great_ai",
    liveButtonText: "Watch video"
  },
  {
    title: "UniFriend",
    description: "One-stop companion for university students that combines  24/7 mental \
    wellbeing support and personalized guidance in university coursework. Completed this for \
    Building for Good (ft. Lovable) event in KL.",
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    imgs:[{
                  src: "/UniFriend1.png",
                  alt: "UniFriend image 1"
              },
              {
                  src: "/UniFriend2.png",
                  alt: "UniFriend image 2"
              },
              {
                  src: "/UniFriend3.png",
                  alt: "UniFriend image 3"
              }],
    liveUrl: "https://www.linkedin.com/posts/abelchinjh_sat-oct-18-uob-plaza-1-kl-had-a-blast-with-activity-7385240223443644416-VqB1",
    repoUrl: "https://github.com/abelcjh/uni-ally-mate",
    liveButtonText: "View LinkedIn post"
  },
  {
    title: "ImpactHub",
    description: "The LinkedIn for impact - a marketplace and networking platform for students \
    to build verified portfolios of community service, and for organizations to recruit talent for \
    initiatives. Completed with my team for Cursor Anthropic Hackathon Malaysia 2025.",
    tags: ["next.js", "Tailwind CSS", "shadcn/ui", "Supabase", "React Query"],
    liveUrl: "https://devpost.com/software/impacthub-iwas2p",
    repoUrl: "https://github.com/abelcjh/cursor-hackathon-malaysia-2025",
    liveButtonText: "Watch video"
  },
  {
    title: "Phasmophobia",
    description: "A playful game of hide and seek with ghosts where users use a device to \
    detect 'ghosts' and converse with them real-time in speech.",
    tags: ["ESP32-S3-BOX-3", "LED", "ESP-IDF", "Gemini", "ElevenLabs", "SquareLine", "LVGL"],
    liveUrl: "https://devpost.com/software/ghosted-sxkpjo",
    liveButtonText: "Watch video"
  },
  {
    title: "MayaShield",
    description: "Anti-scam call mobile app. Detects scam calls real-time and reports them \
    immediately. Ends call for user, and saves to community database for others' apps to check. \
    Completed with my team for KitaHack Malaysia 2026.",
    tags: ["Flutter", "Google Chirp 3", "Gemini 2.5 Flash", "Google Cloud Firestore"],
    liveUrl: "https://www.youtube.com/watch?v=7UnJo-vcJC0",
    repoUrl: "https://github.com/abelcjh/kitahack2026",
    liveButtonText: "Watch video"
  }
];