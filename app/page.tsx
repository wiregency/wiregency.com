import {
  ArrowRight,
  Twitter,
  MessageCircle,
  Scale,
  FileText,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="w-full max-w-4xl rounded-md p-6 sm:p-8 md:p-12 flex flex-col items-center gap-6 sm:gap-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center">
          wiregency
        </h1>

        <p className="text-zinc-400 text-center text-base sm:text-lg max-w-[280px] sm:max-w-xl px-1">
          Développement web & design sur mesure pour les startups et les
          entreprises. Site web en construction 🚧
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-lg">
          <a
            href="https://discord.wiregency.com"
            className="group flex-1 bg-white text-black hover:bg-zinc-200 transition-all rounded-full py-2.5 sm:py-3 px-4 sm:px-6 text-center font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span>Demander un devis</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>

          <a
            href="https://twitter.com/wiregency"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 border border-white/20 hover:bg-white/10 transition-all rounded-full py-2.5 sm:py-3 px-4 sm:px-6 text-center font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Suivre sur Twitter</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-400 mt-4 sm:mt-8">
          <a
            href="https://discord.gg/wiregency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Contact</span>
          </a>

          <button
            disabled
            className="flex items-center gap-2 opacity-50 cursor-not-allowed"
          >
            <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Mentions légales</span>
          </button>

          <button
            disabled
            className="flex items-center gap-2 opacity-50 cursor-not-allowed"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>CGV</span>
          </button>
        </div>
      </main>
    </div>
  );
}
