export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: '\u25C9',
    title: 'Single Origin',
    description: 'Every bag traces to one farm, one harvest, one story worth savoring.',
  },
  {
    icon: '\u21BB',
    title: 'Fresh Roasted',
    description: 'Beans roasted to order and shipped within 48 hours for peak flavor.',
  },
  {
    icon: '\u2662',
    title: 'Curated Monthly',
    description: 'Our Q-graders select each month\'s offering from over 200 candidates.',
  },
];
