// components/Banner.tsx
import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <Link href="https://discord.wiregency.com" target="_blank">
      <div className="w-full bg-orange-100 border-b border-orange-200 cursor-pointer overflow-hidden">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-2 py-1">
          <span role="img" aria-label="package" className="text-base">
            📦
          </span>
          <p className="text-black text-md font-medium">
            Besoin d&apos;un site internet? Devis sur-mesure, prise en charge
            rapide, offres compétitives via notre serveur Discord
          </p>
          <span role="img" aria-label="package" className="text-base">
            📦
          </span>
        </div>

        {/* Mobile */}
        <div className="md:hidden relative whitespace-nowrap py-1 overflow-hidden">
          <div className="marquee-container inline-flex gap-64">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center gap-2 shrink-0">
                <span role="img" aria-label="package" className="text-base">
                  📦
                </span>
                <p className="text-black text-md font-medium">
                  Besoin d&apos;un site internet? Devis sur-mesure, prise en
                  charge rapide, offres compétitives via notre serveur Discord
                </p>
                <span role="img" aria-label="package" className="text-base">
                  📦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Banner;
