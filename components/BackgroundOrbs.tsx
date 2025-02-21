'use client'

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-blue-500/10 blur-3xl orb-left"
        style={{
          top: '10%',
          left: '15%',
        }}
      />
      <div
        className="absolute w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-purple-500/10 blur-3xl orb-right"
        style={{
          top: '20%',
          right: '10%',
        }}
      />
    </div>
  );
}