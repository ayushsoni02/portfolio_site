const skills = [
  "Anchor", "Rust", "Solana", "Next.js", "React", "TypeScript", "TailwindCSS", "MongoDB",
  "PostgreSQL", "Node.js", "Prisma", "Supabase"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-black mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3 animate-fade-in-up">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


