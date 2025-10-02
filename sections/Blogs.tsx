const blogs = [
  {
    title: "Wormhole: The Cross-Chain Highway of Web3",
    desc: "An in-depth exploration of Wormhole, how it enables cross-chain interoperability, and its role in the future of Web3 applications.",
    tags: ["Blockchain", "Web3", "Wormhole"],
    link: "https://medium.com/@ayushsoni1021/wormhole-the-cross-chain-highway-of-web3-5765b0f8d3cf",
  },
  {
    title: "The Blockchain Layer Cake: A Guide to L0, L1, L2, and L3",
    desc: "A beginner-friendly explanation of the different blockchain layers, their roles, and how they interact to power Web3.",
    tags: ["Web3", "Blockchain"],
    link:"https://medium.com/@ayushsoni1021/the-blockchain-layer-cake-a-guide-to-l0-l1-l2-and-l3-16f1fd77de6c"
  },
  {
    title: "A Beginner’s Guide to Solana: The High-Speed Blockchain",
    desc: "An introductory guide to Solana’s architecture, speed, and unique features — perfect for beginners stepping into the ecosystem.",
    tags: ["Solana", "Blockchain"],
    link:"https://medium.com/@ayushsoni1021/solanas-account-model-explained-how-the-fastest-blockchain-organizes-data-ef95225f2159"
  },
  {
    title: "Solana’s Account Model Explained: How the Fastest Blockchain Organizes Data",
    desc: "A detailed breakdown of Solana’s account model, how data is structured, and why it’s critical for program development.",
    tags: ["Rust", "Solana", "Programming"],
    link:"https://medium.com/@ayushsoni1021/a-beginners-guide-to-solana-the-high-speed-blockchain-52d8c1e4f08f"
  }
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-2 border border-black text-black text-sm rounded-full font-bold">
            Blogs
          </span>
          <h2 className="text-3xl font-bold text-black mb-4 py-3">Read my latest blogs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I write about blockchain, web development, and my experiences in tech. Here are some of my latest articles.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blogs"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog }: { blog: typeof blogs[0] }) {
  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow hover:scale-[1.02] transform duration-200"
    >
      <h3 className="text-lg font-semibold text-black mb-3">{blog.title}</h3>
      <p className="text-gray-700 mb-4">{blog.desc}</p>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
