export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold text-black mb-6">Work Experience</h2>
        <ol className="relative border-s border-gray-200 pl-6 space-y-8 animate-fade-in-up">
        <li>
  <div className="absolute -start-3 mt-1 w-2 h-2 rounded-full bg-black" />
  <h3 className="text-black font-medium">Turbin3 Accelerated Builders Cohort – Adv Solana Development</h3>
  <p className="text-gray-500 text-sm">Sep 2025 – Present</p>
  <p className="mt-2 text-gray-700">
    Currently exploring Solana’s advanced infrastructure through the Accelerator Builder Cohort. 
    Gaining hands-on experience with <strong>LiteSVM</strong> (lightweight Solana virtual machine), 
    <strong>Token Extensions</strong> (advanced token primitives), and <strong>Yellowstone</strong> 
    (validator and RPC frameworks). Experimenting with <strong>Pinocchio repos</strong> to deepen 
    understanding of Solana program runtime, state management, and validator architecture.
  </p>
</li>


  <li>
    <div className="absolute -start-3 mt-1 w-2 h-2 rounded-full bg-black" />
    <h3 className="text-black font-medium">Turbin3 Cohort – Solana Development</h3>
    <p className="text-gray-500 text-sm">Jun 2025 – Aug 2025</p>
    <p className="mt-2 text-gray-700">
      Gained practical experience in Solana blockchain development. Learned to build client-side 
      applications and write smart contracts using the Anchor framework. Explored token standards 
      with SPL Tokens, worked with the Metaplex protocol, and deepened understanding of on-chain 
      program architecture for decentralized apps.
    </p>
  </li>

  <li>
    <div className="absolute -start-3 mt-1 w-2 h-2 rounded-full bg-black" />
    <h3 className="text-black font-medium">Freelance & Side Projects</h3>
    <p className="text-gray-500 text-sm">2023 – Present</p>
    <p className="mt-2 text-gray-700">
      Built and deployed full-stack applications integrating payments, storage, and authentication. 
      Gained experience with Next.js, Razorpay, MongoDB, PostgreSQL and ImageKit through a digital image 
      marketplace. Experimented with AI-driven task management and real-time Web3 integrations 
      across independent projects.
    </p>
  </li>
</ol>



        <h2 className="text-2xl font-semibold text-black mt-16 mb-6">Education</h2>
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <div className="flex items-center justify-between">
          <h3 className="text-black font-medium">Indian Institute of Information Technology, Nagpur </h3>
          <span className="text-gray-500 text-sm"> 2023-2027</span>
          </div>
          <p className="text-gray-500 text-sm">Bachelor's in Computer Science & Engineering</p>
        </div>
      </div>
    </section>
  );
}


