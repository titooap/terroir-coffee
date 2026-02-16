export interface Testimonial {
  quote: string;
  authorName: string;
  avatarLetter: string;
  detail: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "I've tried a dozen subscription services. Terroir is the only one where I genuinely look forward to the delivery. The Ethiopian Yirgacheffe last month was transcendent.",
    authorName: 'Maya Chen',
    avatarLetter: 'M',
    detail: 'Subscriber since 2024',
  },
  {
    quote: "The tasting notes are spot-on and the freshness is unmatched. I cancelled my café habit entirely — my home pour-over with Terroir beans is better than anything I was buying.",
    authorName: 'James Whitfield',
    avatarLetter: 'J',
    detail: 'The Connoisseur plan',
  },
  {
    quote: "As a café owner, I use Terroir to stay current on what's happening in specialty coffee. Their sourcing is impeccable and the quality is ruthlessly consistent.",
    authorName: 'Sofia Reyes',
    avatarLetter: 'S',
    detail: 'Owner, Bloom Coffee Bar',
  },
  {
    quote: "Bought the Starter plan as a gift for my partner. We're now both on the Enthusiast plan. The Colombian Gesha they sent in December was a revelation.",
    authorName: 'Alex Tanaka',
    avatarLetter: 'A',
    detail: 'Subscriber since 2025',
  },
];
