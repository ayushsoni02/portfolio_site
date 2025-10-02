export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 border border-black text-black text-sm rounded-full font-bold">Hackathons</span>
          <h2 className="text-3xl font-bold mt-4">Building excites me</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            During my time in university, I competed in multiple hackathons, where people from all over the country came together to build incredible things within just 2-3 days.
          </p>
        </div>
        <ol className="relative border-s border-gray-200 pl-6 space-y-10 animate-fade-in-up">
          {[
            {
              title: "CVMU Hackathon 2.0",
              where: "Gujarat, India",
              desc: "Built a cross-platform application named ExpenShare that tracks expenses, supports group-based expense splitting, and automatically detects transactional messages.",
              tags: ["Android", "Server"],
            },
            {
              title: "CVMU Hackathon 3.0",
              where: "Gujarat, India",
              desc: "Developed PLUTUS, an automated crypto investment platform that uses dollar-cost averaging (DCA) for smarter portfolio management.",
              tags: ["Web", "ML"],
            },
            {
              title: "Solana Breakout",
              where: "Online",
              desc: "zkdrops is a Solana-based dApp that enables private, verifiable token airdrops using zero-knowledge proofs.",
              tags: ["zkdrops", "Code"],
            },
          ].map((item) => (
            <li key={item.title}>
              <div className="absolute -start-3 mt-1 w-2 h-2 rounded-full bg-black" />
              <h3 className="text-black font-medium">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.where}</p>
              <p className="mt-2 text-gray-700">{item.desc}</p>
              <div className="mt-3 flex gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs border border-gray-300 rounded-full">{t}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


