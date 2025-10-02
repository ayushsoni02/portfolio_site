const blogs = [
  {
    title: "Understanding PDAs, Seeds and Bumps in Solana",
    desc: "PDAs in solana can be quite confusing for a beginner. Learn everything about PDAs and gain clarity like never before.",
    tags: ["Solana", "Blockchain"],
  },
  {
    title: "Learning Memory Management, Structs and Enums in Rust",
    desc: "A deep dive into understanding and implementing memory management in Rust, essential to understand Solana Programs.",
    tags: ["Rust", "Solana", "Programming"],
  },
  {
    title: "Custom Transactions and Instructions in Solana",
    desc: "Learn how to write customized transaction and instructions, essential for specific purposes!",
    tags: ["Solana", "Smart Contracts"],
  },
  {
    title: "Beyond the Hype - Why Blockchain Matters",
    desc: "Understand why blockchain matters in today's world, more than ever!",
    tags: ["Blockchain", "Web3", "Bitcoin"],
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-black text-white text-sm rounded-full mb-4">Blogs</span>
          <h2 className="text-3xl font-bold text-black mb-4">Read my latest blogs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I write about blockchain, web development, and my experiences in tech. Here are some of my latest articles.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/blogs" className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            View More
          </a>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog }: { blog: typeof blogs[0] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
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