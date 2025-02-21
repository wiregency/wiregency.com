import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <Link href="https://discord.wiregency.com" target="_blank">
      <div className="w-full bg-orange-100 border-b border-orange-200 cursor-pointer overflow-hidden fixed top-0 left-0 right-0 z-[60]">

        <div className="hidden md:flex items-center justify-center gap-2 py-1">
          <span role="img" aria-label="package" className="text-base">
            📦
          </span>
          <p className="text-black text-md font-medium">
            Need a website? Get a custom quote, fast response, and competitive offers through our Discord server
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
                  Need a website? Get a custom quote, fast response, and competitive offers through our Discord server
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
