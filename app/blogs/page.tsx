import Link from "next/link";

const allBlogs = [
  {
    title: "Wormhole: The Cross-Chain Highway of Web3",
    desc: "An in-depth exploration of Wormhole, how it enables cross-chain interoperability, and its role in the future of Web3 applications.",
    tags: ["Blockchain", "Web3", "Wormhole"],
    date: "Oct 2, 2025",
  },
  {
    title: "The Blockchain Layer Cake: A Guide to L0, L1, L2, and L3",
    desc: "A beginner-friendly explanation of the different blockchain layers, their roles, and how they interact to power Web3.",
    tags: ["Web3", "Blockchain"],
    date: "Sep 16, 2025",
  },
  {
    title: "A Beginner’s Guide to Solana: The High-Speed Blockchain",
    desc: "An introductory guide to Solana’s architecture, speed, and unique features — perfect for beginners stepping into the ecosystem.",
    tags: ["Solana", "Blockchain"],
    date: "Jul 01, 2025",
  },
  {
    title: "Solana’s Account Model Explained: How the Fastest Blockchain Organizes Data",
    desc: "A detailed breakdown of Solana’s account model, how data is structured, and why it’s critical for program development.",
    tags: ["Rust", "Solana", "Programming"],
    date: "Jun 13, 2025",
  }
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
          <Link href="/" className="inline-block px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
            ← Back to Home
          </Link>
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
