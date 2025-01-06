import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <Link href="https://discord.wiregency.com">
      <div className="w-full bg-orange-100 py-1 text-center text-md font-medium border-b border-orange-200 cursor-pointer">
        <div className="flex items-center justify-center gap-2">
          <span role="img" aria-label="package" className="text-base">
            📦
          </span>
          <p className="text-black">
            Besoin d&apos;un site internet? Devis sur-mesure, prise en charge
            rapide, offres compétitives via notre serveur Discord
          </p>
          <span role="img" aria-label="package" className="text-base">
            📦
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Banner;
