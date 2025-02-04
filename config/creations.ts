export interface Creation {
  title: string;
  description: string;
  image: string;
  tag: {
    text: string;
    color: string;
  };
  backgroundColor: string;
  url?: string; // Optional URL for redirection
}

export const creations: Creation[] = [
  {
    title: "Atlas",
    description: "Thème unique conçu sous le CMS Azuriom avec TailwindCSS.",
    image: "/images/Atlas.webp",
    tag: {
      text: "Thème Azuriom",
      color: "yellow",
    },
    backgroundColor: "yellow",
    url: "https://sunerya.fr" // Optional
  },
  {
    title: "Vintarget",
    description: "Page d'opt in pour une solution SaaS réalisée avec NextJS, TailwindCSS, Resend.",
    image: "/images/vintarget.png",
    tag: {
      text: "Landing Page",
      color: "green",
    },
    backgroundColor: "green",
    url: "https://vintarget.fr"
  },
  {
    title: "PhoneRepair44",
    description: "Landing page réalisée pour PhoneRepair44 avec NextJS, TailwindCSS, Supabase.",
    image: "/images/phonerepair44.png",
    tag: {
      text: "Landing Page",
      color: "blue",
    },
    backgroundColor: "blue",
    url: "https://phonerepair44.fr"
  }
];