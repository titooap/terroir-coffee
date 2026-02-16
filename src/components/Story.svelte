<section id="story">
  <div class="story">
    <div class="story-image">
      <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" alt="Barista pouring latte art" loading="lazy">
    </div>
    <div class="story-text">
      <span class="section-tag">Our Story</span>
      <h2 class="section-heading">Coffee as it was<br>meant to be</h2>
      <p class="section-sub">We partner directly with smallholder farmers across Ethiopia, Colombia, and Guatemala — paying 40% above fair trade prices. Every subscription funds sustainable agriculture and the next generation of specialty growers.</p>
      <div class="story-stats">
        <div>
          <span class="stat-num">12</span>
          <span class="stat-label">Partner Farms</span>
        </div>
        <div>
          <span class="stat-num">6k+</span>
          <span class="stat-label">Subscribers</span>
        </div>
        <div>
          <span class="stat-num">92+</span>
          <span class="stat-label">Avg. Cup Score</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section { padding: 6rem 2rem; }

  .story {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
  }

  .story-image {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    aspect-ratio: 4/5;
  }

  .story-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .story-image:hover img { transform: scale(1.04); }

  .story-image::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(200, 135, 59, 0.15);
    border-radius: 8px;
    pointer-events: none;
  }

  .story-text :global(.section-sub) { margin-bottom: 2rem; }

  .story-stats {
    display: flex;
    gap: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid var(--light-line);
  }

  .stat-num {
    font-family: var(--font-display);
    font-size: 2rem;
    color: var(--amber);
    display: block;
  }

  .stat-label {
    font-size: 0.75rem;
    color: var(--warm-gray);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }

  @media (max-width: 900px) {
    .story { grid-template-columns: 1fr; gap: 2.5rem; }
    .story-image { aspect-ratio: 16/10; }
  }

  @media (max-width: 480px) {
    .story-stats { flex-direction: column; gap: 1.25rem; }
  }
</style>
