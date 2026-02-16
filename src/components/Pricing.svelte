<script>
  import { pricingTiers } from '../data/pricing';
</script>

<section class="pricing-section" id="pricing">
  <div>
    <span class="section-tag">Choose Your Ritual</span>
    <h2 class="section-heading">Simple, honest pricing</h2>
    <p class="section-sub">No contracts. Skip or cancel anytime. Every plan includes free shipping.</p>
  </div>

  <div class="pricing-grid">
    {#each pricingTiers as tier}
      <div class="pricing-card" class:featured={tier.featured}>
        {#if tier.featured}
          <span class="pricing-badge">Most Popular</span>
        {/if}
        <div class="pricing-name">{tier.name}</div>
        <p class="pricing-desc">{tier.description}</p>
        <div class="pricing-price">
          <span class="price-amount">${tier.price}</span>
          <span class="price-period">/ month</span>
        </div>
        <ul class="pricing-features">
          {#each tier.features as feature}
            <li>{feature}</li>
          {/each}
        </ul>
        <a href="#" class="pricing-btn" class:filled={tier.featured} class:outline={!tier.featured}>Get Started</a>
      </div>
    {/each}
  </div>
</section>

<style>
  .pricing-section {
    background: var(--milk);
    text-align: center;
    padding: 6rem 2rem;
  }

  .pricing-section :global(.section-sub) {
    margin: 0 auto 3.5rem;
    text-align: center;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1060px;
    margin: 0 auto;
  }

  .pricing-card {
    background: var(--latte);
    border: 1px solid var(--light-line);
    border-radius: 12px;
    padding: 2.5rem 2rem;
    text-align: left;
    position: relative;
    transition: transform 0.35s, box-shadow 0.35s;
  }

  .pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(26, 17, 10, 0.08);
  }

  .pricing-card.featured {
    background: var(--dark-roast);
    color: var(--cream);
    border-color: transparent;
    transform: scale(1.03);
  }

  .pricing-card.featured:hover {
    transform: scale(1.03) translateY(-4px);
    box-shadow: 0 16px 56px rgba(26, 17, 10, 0.2);
  }

  .pricing-badge {
    position: absolute;
    top: -0.7rem;
    right: 1.5rem;
    background: var(--amber);
    color: var(--milk);
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.35rem 0.9rem;
    border-radius: 100px;
  }

  .pricing-name {
    font-family: var(--font-display);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  .pricing-desc {
    font-size: 0.85rem;
    color: var(--warm-gray);
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  .featured .pricing-desc { color: rgba(245, 239, 230, 0.6); }

  .pricing-price {
    display: flex;
    align-items: baseline;
    gap: 0.3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--light-line);
  }

  .featured .pricing-price { border-color: rgba(245, 239, 230, 0.12); }

  .price-amount {
    font-family: var(--font-display);
    font-size: 2.8rem;
    line-height: 1;
  }

  .price-period {
    font-size: 0.85rem;
    color: var(--warm-gray);
    font-weight: 300;
  }

  .featured .price-period { color: rgba(245, 239, 230, 0.5); }

  .pricing-features {
    list-style: none;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .pricing-features li {
    font-size: 0.88rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .pricing-features li::before {
    content: '\2713';
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--amber);
    flex-shrink: 0;
  }

  .featured .pricing-features li::before { color: var(--golden); }

  .pricing-btn {
    display: block;
    width: 100%;
    padding: 0.9rem;
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: center;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
  }

  .pricing-btn.outline {
    background: transparent;
    border: 1px solid var(--light-line);
    color: var(--espresso);
  }

  .pricing-btn.outline:hover {
    border-color: var(--amber);
    color: var(--amber);
  }

  .pricing-btn.filled {
    background: var(--amber);
    border: 1px solid var(--amber);
    color: var(--milk);
  }

  .pricing-btn.filled:hover {
    background: var(--golden);
    border-color: var(--golden);
    box-shadow: 0 4px 20px rgba(200, 135, 59, 0.35);
  }

  @media (max-width: 900px) {
    .pricing-grid {
      grid-template-columns: 1fr;
      max-width: 420px;
    }
    .pricing-card.featured { transform: none; }
    .pricing-card.featured:hover { transform: translateY(-4px); }
  }
</style>
