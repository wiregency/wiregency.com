export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Comment se déroule un projet ?",
    answer: "Nous commençons par un échange détaillé sur Discord pour comprendre vos besoins. Ensuite, nous établissons un devis gratuit avant de démarrer le développement."
  },
  {
    question: "Quels sont vos délais de réalisation ?",
    answer: "La réalisation de vos projets dépendent de la complexité de celui-ci et de nos disponibilités, n'hésitez pas à rejoindre le discord pour demander un devis."
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Nous utilisons principalement React, Next.js, TypeScript, TailwindCSS et Adonis pour garantir des applications modernes, performantes et facilement maintenables."
  }
];