export interface PricingTier {
  name: string;
  description: string;
  price: number;
  features: string[];
  featured: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'The Starter',
    description: 'Perfect for the curious palate. One bag to explore each month.',
    price: 16,
    features: [
      '1 bag (250g) per month',
      'Single origin selection',
      'Tasting notes card',
      'Free standard shipping',
    ],
    featured: false,
  },
  {
    name: 'The Enthusiast',
    description: 'For daily drinkers who want variety and depth in every cup.',
    price: 28,
    features: [
      '2 bags (250g each) per month',
      'Rotating origins & blends',
      'Brewing guide included',
      'Free express shipping',
      'Early access to limited lots',
    ],
    featured: true,
  },
  {
    name: 'The Connoisseur',
    description: 'The full experience. Rare micro-lots and exclusive roaster\'s picks.',
    price: 46,
    features: [
      '3 bags including micro-lots',
      'Exclusive roaster\'s reserve',
      'Video tasting sessions',
      'Free express shipping',
      'Quarterly cupping kit',
    ],
    featured: false,
  },
];
