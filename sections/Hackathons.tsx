export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-2 border border-black text-black text-sm rounded-full font-bold">Hackathons</span>
          <h2 className="text-3xl font-bold mt-4 py-3">Building excites me</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            I competed in multiple hackathons, where people from various domains came together to build incredible things within just 2-3 days.
          </p>
        </div>
        <ol className="relative border-s border-gray-200 pl-6 space-y-10 animate-fade-in-up">
          {[
            {
              title: "ETHGlobal New Delhi – Grafi-AI",
              where: "New Delhi, India",
              desc: "A Canva-like decentralized design tool built during ETHGlobal New Delhi. Uses Seal for encryption and Walrus for secure, decentralized storage.",
              tags: ["Web3", "Sui","Walrus", "Seal", "Decentralized"],
            },
            {
              title: "NSSC 2024 – Cosmic Collision",
              where: "IIT Kharagpur, India",
              desc: "Secured 7th place out of 150+ teams for analysing asteroid risks with ML models. Classified potentially hazardous asteroids using orbital parameters, velocity, size, and Earth proximity.",
              tags: ["ML", "Data Science", "Astrophysics"],
            },
            {
              title: "ESOC Hackathon – LegalEase",
              where: "IIIT Nagpur, India",
              desc: "Won 2nd runner-up for developing LegalEase – a web app that simplifies complex legal documents and answers rights-related queries using LLMs like LegalBERT, aimed at democratizing access to justice.",
              tags: ["AI", "Web", "LegalTech"],
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
