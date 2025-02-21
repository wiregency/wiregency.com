// Base interface
export interface Creation {
  title: string;
  description: string;
  image: string;
  tag: {
    text: string;
    color: string;
  };
  backgroundColor: string;
  url?: string;
}

// Extended interface for projects
export interface Project extends Creation {
  slug: string;
  content?: string;
}

export const projects: Project[] = [
    {
      title: "Atlas",
      description: "Unique theme designed for Azuriom CMS with TailwindCSS.",
      image: "/images/Atlas.webp",
      tag: {
        text: "Azuriom Theme",
        color: "yellow",
      },
      backgroundColor: "yellow",
      // url: "https://sunerya.fr",
      slug: "atlas",
    },
    {
      title: "Nomad",
      description: "Free theme designed for Azuriom CMS with Bootstrap.",
      image: "/images/Nomad.webp",
      tag: {
        text: "Azuriom Theme",
        color: "yellow",
      },
      backgroundColor: "yellow",
      url: "https://github.com/wiregency/nomad-theme",
      slug: "nomad",
    },
];