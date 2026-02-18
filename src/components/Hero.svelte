<section class="hero" id="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <span class="hero-tag">Specialty Coffee Subscription</span>
    <h1>Taste the <em>Origin</em> in Every Cup</h1>
    <p class="hero-sub">Ethically sourced, single-origin beans roasted within 48 hours of shipping. From highland farms to your morning ritual.</p>
    <div class="hero-actions">
      <a href="#pricing" class="btn-primary">Start Your Journey &rarr;</a>
      <a href="#story" class="btn-secondary">Learn More</a>
    </div>
  </div>
  <div class="hero-scroll">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 2rem 4rem;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(175deg, rgba(26,17,10,0.55) 0%, rgba(44,27,14,0.7) 50%, rgba(26,17,10,0.85) 100%),
      url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80') center/cover no-repeat;
    transform: scale(1.15);
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 720px;
  }

  .hero-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--golden);
    margin-bottom: 1.5rem;
    opacity: 0;
  }

  h1 {
    font-family: var(--font-display);
    font-size: clamp(2.8rem, 7vw, 5.5rem);
    line-height: 1.05;
    color: var(--milk);
    margin-bottom: 1.5rem;
    opacity: 0;
  }

  h1 em {
    font-style: italic;
    color: var(--golden);
  }

  .hero-sub {
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.7;
    color: rgba(255,253,249,0.7);
    font-weight: 300;
    max-width: 520px;
    margin: 0 auto 2.5rem;
    opacity: 0;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    opacity: 0;
  }

  .hero-scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255,253,249,0.4);
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0;
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, rgba(255,253,249,0.4), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @media (max-width: 480px) {
    h1 { font-size: 2.4rem; }
    .hero-actions { flex-direction: column; align-items: center; }
  }
</style>
