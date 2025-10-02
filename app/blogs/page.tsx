const allBlogs = [
  {
    title: "Understanding PDAs, Seeds and Bumps in Solana",
    desc: "PDAs in solana can be quite confusing for a beginner. Learn everything about PDAs and gain clarity like never before.",
    tags: ["Solana", "Blockchain"],
    date: "Oct 15, 2025",
  },
  {
    title: "Learning Memory Management, Structs and Enums in Rust",
    desc: "A deep dive into understanding and implementing memory management in Rust, essential to understand Solana Programs.",
    tags: ["Rust", "Solana", "Programming"],
    date: "Oct 01, 2025",
  },
  {
    title: "Custom Transactions and Instructions in Solana",
    desc: "Learn how to write customized transaction and instructions, essential for specific purposes!",
    tags: ["Solana", "Smart Contracts"],
    date: "Sep 15, 2025",
  },
  {
    title: "Beyond the Hype - Why Blockchain Matters",
    desc: "Understand why blockchain matters in today's world, more than ever!",
    tags: ["Blockchain", "Web3", "Bitcoin"],
    date: "Sep 01, 2025",
  },
  {
    title: "Building Scalable dApps on Solana",
    desc: "Best practices and patterns for creating decentralized applications that can handle high transaction volumes.",
    tags: ["Solana", "dApps", "Scalability"],
    date: "Aug 15, 2025",
  },
  {
    title: "The Future of Web3 Development",
    desc: "Exploring emerging trends and technologies that will shape the next generation of web applications.",
    tags: ["Web3", "Future", "Technology"],
    date: "Aug 01, 2025",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">All Blogs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My thoughts, tutorials, and insights on blockchain, web development, and technology.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
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

function BlogCard({ blog }: { blog: typeof allBlogs[0] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">{blog.date}</span>
      </div>
      <h3 className="text-lg font-semibold text-black mb-3">{blog.title}</h3>
      <p className="text-gray-700 mb-4">{blog.desc}</p>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
