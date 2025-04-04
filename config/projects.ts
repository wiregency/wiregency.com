export interface Creation {
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  image: string;
  tag: {
    text: {
      en: string;
      fr: string;
    };
    color: string;
  };
  backgroundColor: string;
  url?: string;
  slug?: string;
}

export interface Project extends Creation {
  slug: string;
  content?: {
    en: string;
    fr: string;
  };
}

export const projects: Project[] = [
    {
      title: {
        en: "Atlas",
        fr: "Atlas"
      },
      description: {
        en: "Unique theme designed for Azuriom CMS with TailwindCSS.",
        fr: "Thème unique conçu pour le CMS Azuriom avec TailwindCSS."
      },
      image: "/images/Atlas.webp",
      tag: {
        text: {
          en: "Azuriom Theme",
          fr: "Thème Azuriom"
        },
        color: "yellow",
      },
      backgroundColor: "yellow",
      url: "https://www.youtube.com/watch?v=9Eix6w8GOGk",
      slug: "atlas",
    },
    {
      title: {
        en: "Primoria",
        fr: "Primoria"
      },
      description: {
        en: "Unique theme designed for Primoria on Azuriom CMS with Bootstrap.",
        fr: "Thème unique conçu pour Primoria sur le CMS Azuriom avec Bootstrap."
      },
      image: "/images/Primoria.webp",
      tag: {
        text: {
          en: "Azuriom Theme",
          fr: "Thème Azuriom"
        },
        color: "yellow",
      },
      backgroundColor: "yellow",
      url: "https://www.youtube.com/watch?v=qf0lFV1nyZQ",
      slug: "primoria",
    },
    {
      title: {
        en: "Nomad",
        fr: "Nomad"
      },
      description: {
        en: "Free theme designed for Azuriom CMS with Bootstrap.",
        fr: "Thème gratuit conçu pour Azuriom CMS avec Bootstrap."
      },
      image: "/images/Nomad.webp",
      tag: {
        text: {
          en: "Azuriom Theme",
          fr: "Thème Azuriom"
        },
        color: "yellow",
      },
      backgroundColor: "yellow",
      url: "https://github.com/wiregency/nomad-theme",
      slug: "nomad",
    },
];