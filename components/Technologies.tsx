const technologies = [
  { name: "TypeScript", icon: "typescript" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "AdonisJS", icon: "adonis" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "MySQL", icon: "mysql" },
  { name: "Redis", icon: "redis" },
  { name: "PostgreSQL", icon: "postgresql" }
] as const;

export default function TechnologiesSection() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
        Nos Technologies
      </h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
        {technologies.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-2 rounded-xl p-3 hover:border-zinc-700 transition-colors group"
          >
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`${name} icon`}
              className="w-16 h-16 transition-all group-hover:scale-110"
            />
            <span className="text-sm text-zinc-400 transition-colors group-hover:text-white">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}