export interface Coffee {
  name: string;
  origin: 'africa' | 'americas' | 'asia';
  country: string;
  price: number;
  notes: string;
  roastLevel: number;
  process: string;
  altitude: string;
  image: string;
  imageAlt: string;
}

export const coffees: Coffee[] = [
  {
    name: 'Yirgacheffe Natural',
    origin: 'africa',
    country: 'Ethiopia',
    price: 22,
    notes: 'Blueberry, jasmine, dark chocolate. A bright, fruit-forward cup with a silky finish.',
    roastLevel: 2,
    process: 'Natural',
    altitude: '1,950m',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&q=80',
    imageAlt: 'Ethiopian Yirgacheffe coffee beans',
  },
  {
    name: 'Huila Gesha',
    origin: 'americas',
    country: 'Colombia',
    price: 34,
    notes: 'Peach, bergamot, honeycomb. An exquisitely complex cup with floral aromatics.',
    roastLevel: 1,
    process: 'Washed',
    altitude: '1,800m',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&q=80',
    imageAlt: 'Colombian Huila coffee',
  },
  {
    name: 'Antigua Bourbon',
    origin: 'americas',
    country: 'Guatemala',
    price: 24,
    notes: 'Brown sugar, toasted almond, red apple. A comforting, balanced cup for everyday ritual.',
    roastLevel: 3,
    process: 'Washed',
    altitude: '1,600m',
    image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80',
    imageAlt: 'Guatemala Antigua coffee',
  },
  {
    name: 'Nyeri AA',
    origin: 'africa',
    country: 'Kenya',
    price: 26,
    notes: 'Blackcurrant, grapefruit, raw cane sugar. Bright acidity with a juicy, wine-like body.',
    roastLevel: 2,
    process: 'Washed',
    altitude: '1,750m',
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&q=80',
    imageAlt: 'Kenya AA coffee',
  },
  {
    name: 'Mandheling Reserve',
    origin: 'asia',
    country: 'Sumatra',
    price: 20,
    notes: 'Cedar, dark cocoa, earthy spice. A full-bodied, low-acid cup with deep, lingering warmth.',
    roastLevel: 4,
    process: 'Wet-hulled',
    altitude: '1,300m',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&q=80',
    imageAlt: 'Sumatra Mandheling coffee',
  },
  {
    name: 'Cerrado Honey',
    origin: 'americas',
    country: 'Brazil',
    price: 19,
    notes: 'Hazelnut, milk chocolate, caramel. Smooth, sweet, and wonderfully approachable.',
    roastLevel: 3,
    process: 'Honey',
    altitude: '1,100m',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
    imageAlt: 'Brazil Santos coffee',
  },
];
