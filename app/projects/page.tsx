import Link from "next/link";

const allProjects = [
  {
    title: "LegalEase",
    date: "September 2025",
    image: "/legalease.png",
    status: "Completed",
    desc: "Legal Helper – An AI-powered legal assistant platform. Simplifies legal documents, enables chat with an AI legal bot, and helps track case progress anytime, anywhere.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "AI/LLMs"],
    website: "https://legal-ease-zeta.vercel.app/",
    source: "https://github.com/ayushsoni02/LegalEase",
  },
  {
    title: "BlockNova",
    date: "August 2025",
    image: "/blocknova.png",
    status: "Completed",
    desc: "Blockchain SaaS Landing Page – A modern, responsive landing page with smooth animations and clean UI tailored for the blockchain industry.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    website: "https://blockchain-saas-landing-page.vercel.app/",
    source: "https://github.com/ayushsoni02/BlockNova",
  },
  {
    title: "LinkNest",
    date: "July 2025",
    image: "/linknest.png",
    status: "Completed",
    desc: "A personal knowledge management app. Save and organize important links from platforms like Twitter, YouTube, and others for easy access later, simplifying content management and boosting productivity.",
    tech: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
    website: "https://linknest-v1.vercel.app/",
    source: "https://github.com/ayushsoni02/LinkNest",
  },
  {
    title: "PixelKit",
    date: "June 2025",
    image: "/pixelkit.png",
    status: "Ongoing",
    desc: "A modern e-commerce platform for selling digital media assets including images, videos, e-books, and PDFs. Integrated with ImageKit for media storage, NextAuth for authentication, and Razorpay for payments.",
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "ImageKit",
      "Razorpay",
      "NextAuth",
    ],
    website: "#",
    source: "https://github.com/ayushsoni02/pixelKit",
  },
  {
    title: "Decentralised_Canvas",
    date: "May 2025",
    image: "/decentralised_canvas.png",
    status: "Ongoing",
    desc: "A Canva-like decentralized design tool built during ETHGlobal New Delhi. Uses Seal for encryption and Walrus for secure, decentralized storage.",
    tech: ["Seal", "Walrus", "React", "Next.js"],
    website: "#",
    source: "https://github.com/ayushsoni02/D_canvas",
  },
  {
    title: "CanvasFlow",
    date: "April 2025",
    image: "/canvasflow.png",
    status: "Ongoing",
    desc: "A real-time collaborative whiteboard app built from scratch. Features multi-user drawing via WebSocket, monorepo architecture with Turborepo, and a sleek, intuitive UI.",
    tech: ["Next.js", "TypeScript", "WebSocket", "Turborepo"],
    website: "#",
    source: "https://github.com/ayushsoni02/Canvas_Flow",
  },
  {
    title: "Sypra (Spend Your Portfolio)",
    date: "March 2025",
    image: "/sypra.png",
    status: "Ongoing",
    desc: "A Solana program that lets users pay merchants using a mix of tokens from their wallet. Supports escrow, optional swaps into merchant-preferred tokens via Jupiter, and settlement with platform fees deducted.",
    tech: ["Rust", "Solana", "Anchor", "Jupiter"],
    website: "#",
    source: "https://github.com/ayushsoni02/Sypra",
  },
  {
    title: "ProtocolPulse",
    date: "February 2025",
    image: "/protocolpulse.png",
    status: "Ongoing",
    desc: "Real-time DeFi protocol health analysis powered by The Graph Protocol. Enables tracking of user behavior patterns and predicting protocol health issues before they become critical.",
    tech: ["The Graph", "React", "TypeScript", "Node.js"],
    website: "#",
    source: "https://github.com/ayushsoni02/ProtocolPulse",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">All Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of my work across various technologies
            and domains.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof allProjects)[0] }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-black">{project.title}</h3>
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              project.status === "Ongoing"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {project.status}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{project.date}</p>
        <p className="text-gray-700 mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link
            href={project.website}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-black text-black rounded hover:bg-black hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Website
          </Link>
          <Link
            href={project.source}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-black text-black rounded hover:bg-black hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Source
          </Link>
        </div>
      </div>
    </div>
  );
}
