export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How does a project work?",
    answer: "We start with a detailed discussion on Discord to understand your needs. Then, we provide a free quote before starting development."
  },
  {
    question: "What are your delivery times?",
    answer: "Project completion times depend on its complexity and our availability. Feel free to join our Discord to request a quote."
  },
  {
    question: "What technologies do you use?",
    answer: "We primarily use React, Next.js, TypeScript, TailwindCSS, and Adonis to ensure modern, performant, and maintainable applications."
  }
];