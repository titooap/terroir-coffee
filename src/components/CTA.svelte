<section class="cta-section">
  <div class="cta-content">
    <span class="section-tag">Ready?</span>
    <h2 class="section-heading">Your best cup of coffee<br>is the <em>next</em> one</h2>
    <p class="section-sub">Join 6,000+ people who wake up to something extraordinary. First bag ships free.</p>
    <a href="#pricing" class="btn-primary">Start Your Subscription &rarr;</a>
  </div>
</section>

<style>
  .cta-section {
    text-align: center;
    padding: 7rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 30% 50%, rgba(200, 135, 59, 0.06) 0%, transparent 60%),
      radial-gradient(ellipse at 70% 50%, rgba(92, 58, 30, 0.04) 0%, transparent 60%);
    pointer-events: none;
  }

  .cta-content {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
  }

  .cta-content :global(.section-heading) {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    margin-bottom: 1.25rem;
  }

  .cta-content :global(.section-sub) {
    margin: 0 auto 2.5rem;
    text-align: center;
  }

  em {
    font-family: var(--font-display);
    font-style: italic;
    color: var(--amber);
  }
</style>
