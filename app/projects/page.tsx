const allProjects = [
  {
    title: "ethereal",
    date: "August 2025",
    status: "Ongoing",
    desc: "a modern nft marketplace, with modern design supporting both devnet and mainnet nfts",
    tech: ["Solana", "Next.js", "Typescript", "TailwindCSS"],
    website: "#",
    source: "#",
  },
  {
    title: "swiftgo",
    date: "July 2025", 
    status: "Completed",
    desc: "a minimalistic and aesthetic landing page for a modern cab-booking service.",
    tech: ["Next.js", "Typescript", "TailwindCSS"],
    website: "#",
    source: "#",
  },
  {
    title: "The NEXUS Platform",
    date: "June 2025",
    status: "Completed",
    desc: "Decentralized identity management system secured by zero-knowledge proofs.",
    tech: ["Rust", "Solana", "Anchor Framework"],
    website: "#",
    source: "#",
  },
  {
    title: "EchoStream UI",
    date: "May 2025",
    status: "Completed",
    desc: "Real-time audio visualization tool with a highly responsive WebGL rendering engine.",
    tech: ["React", "Three.js", "WebGL"],
    website: "#",
    source: "#",
  },
  {
    title: "AetherTerminal",
    date: "April 2025",
    status: "Completed",
    desc: "A browser-based, customizable terminal emulator for cloud environment management.",
    tech: ["TypeScript", "Tailwind CSS", "Docker"],
    website: "#",
    source: "#",
  },
  {
    title: "nodara.network",
    date: "March 2025",
    status: "Ongoing",
    desc: "A lightweight protocol for renting verifiable micro-functions from smartphones, enabling trust-minimized execution and crypto-native monetization.",
    tech: ["Solana", "Rust", "React Native", "Anchor"],
    website: "#",
    source: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">All Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of my work across various technologies and domains.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/" className="inline-block px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof allProjects[0] }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">Project Preview</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-black">{project.title}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {project.status}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{project.date}</p>
        <p className="text-gray-700 mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.website} className="flex items-center gap-1 px-3 py-1.5 text-sm border border-black text-black rounded hover:bg-black hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Website
          </a>
          <a href={project.source} className="flex items-center gap-1 px-3 py-1.5 text-sm border border-black text-black rounded hover:bg-black hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
