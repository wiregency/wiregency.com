import { creations } from "@/config/creations";
import CreationCard from "@/components/CreationCard";
import { ArrowDown, ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import Spline from '@splinetool/react-spline/next';
import TechnologiesSection from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 min-h-[90vh] md:h-screen flex items-center justify-center py-20 md:py-0 relative">
          <div className="max-w-3xl text-center space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              wiregency
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl mx-auto px-4 sm:px-0">
              Développement web & design sur mesure haut de gamme.
            </p>

            <div className="pt-2 md:pt-4">
              <a
                href="https://discord.wiregency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 transition-all rounded-full py-3 md:py-4 px-6 md:px-8 font-medium text-base md:text-lg"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <a
            href="#creations"
            className="absolute bottom-32 left-1/2 -translate-x-1/2 text-zinc-400 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll to creations"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>

        {/* Creations Section */}
        <div id="creations" className="scroll-mt-8 container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Nos créations
          </h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {creations.map((creation, index) => (
              <CreationCard key={index} creation={creation} />
            ))}
          </div>
        </div>

        
        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Foire aux questions
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
                Retrouvez les réponses aux questions les plus courantes sur nos services.
              </p>
            </div>
            <FAQ />
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-12 md:pb-24">
          <div className="max-w-5xl mx-auto bg-zinc-900/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Intéressé ?
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mb-6 sm:mb-8">
                Contactez-nous dès maintenant pour discuter de votre projet en détail. Notre équipe vous accompagnera dans la réalisation de votre vision et vous fournira un devis gratuit, adapté à vos besoins.
              </p>
              <a
                href="https://discord.wiregency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-blue-400 text-black hover:bg-blue-500 transition-all rounded-full py-2.5 sm:py-3 px-5 sm:px-6 text-sm sm:text-base font-medium"
              >
                <span>Rejoindre le discord</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
