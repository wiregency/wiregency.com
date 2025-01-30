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
    url: "https://azuriom.com/" // Optional
  },
];