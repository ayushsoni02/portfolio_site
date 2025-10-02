const projects = [
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
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-black text-white text-sm rounded-full mb-4">Proof of Work</span>
          <h2 className="text-3xl font-bold text-black mb-4">Check out my latest work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/projects" className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            View More
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
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