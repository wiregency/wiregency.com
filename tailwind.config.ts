import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        mesh: {
          '0%': { transform: 'translateY(0) scale(1.0)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
          '100%': { transform: 'translateY(0) scale(1.0)' },
        },
        float: {
          '0%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(10px, 10px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        }
      },
      animation: {
        mesh: 'mesh 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      maskImage: {
        'radial-faded': 'radial-gradient(circle at center, black 45%, transparent 85%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
