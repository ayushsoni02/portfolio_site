export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold text-black mb-6">Work Experience</h2>
        <ol className="relative border-s border-gray-200 pl-6 space-y-8 animate-fade-in-up">
          <li>
            <div className="absolute -start-3 mt-1 w-2 h-2 rounded-full bg-black" />
            <h3 className="text-black font-medium">Software Architect - Quantum Leap Labs</h3>
            <p className="text-gray-500 text-sm">Jan 2024 – Present</p>
            <p className="mt-2 text-gray-700">Led migration of legacy monolith to a containerized microservices architecture, boosting deploy speed by 40%.</p>
          </li>
          <li>
            <div className="absolute -start-3 mt-1 w-2 h-2 rounded-full bg-black" />
            <h3 className="text-black font-medium">Frontend Developer - ChromaTech</h3>
            <p className="text-gray-500 text-sm">Jun 2022 – Dec 2023</p>
            <p className="mt-2 text-gray-700">Optimized critical user interfaces using React and TypeScript, resulting in a 25% reduction in load time.</p>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-black mt-16 mb-6">Education</h2>
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <h3 className="text-black font-medium">B.Tech, Computer Science - Neo-Cali University</h3>
          <p className="text-gray-500 text-sm">2018-2022</p>
        </div>
      </div>
    </section>
  );
}


