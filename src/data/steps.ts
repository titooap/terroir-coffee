export interface Step {
  number: number;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: 1,
    title: 'Choose',
    description: "Pick your plan and tell us how you brew — we'll match your grind.",
  },
  {
    number: 2,
    title: 'We Source',
    description: "Our Q-graders select the month's best lots from partner farms worldwide.",
  },
  {
    number: 3,
    title: 'We Roast',
    description: 'Beans are roasted to order in small batches — never sitting on a shelf.',
  },
  {
    number: 4,
    title: 'You Enjoy',
    description: 'Fresh coffee arrives at your door with tasting notes and brewing tips.',
  },
];
