<script lang="ts">
  import { testimonials } from '../data/testimonials';

  let carouselPos = $state(0);
  let visibleCards = $state(2);

  $effect(() => {
    const update = () => {
      visibleCards = window.innerWidth <= 900 ? 1 : 2;
      carouselPos = Math.min(carouselPos, testimonials.length - visibleCards);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  });

  function move(dir: number) {
    const maxPos = testimonials.length - visibleCards;
    carouselPos = Math.max(0, Math.min(maxPos, carouselPos + dir));
  }

  let trackTransform = $derived(
    `translateX(-${carouselPos * (100 / visibleCards)}%)`
  );
</script>

<section id="testimonials">
  <div class="testimonials-section">
    <div class="testimonials-header">
      <div>
        <span class="section-tag">What People Say</span>
        <h2 class="section-heading">Loved by coffee nerds<br>everywhere</h2>
      </div>
      <div class="carousel-nav">
        <button class="carousel-btn" onclick={() => move(-1)} aria-label="Previous testimonial">&larr;</button>
        <button class="carousel-btn" onclick={() => move(1)} aria-label="Next testimonial">&rarr;</button>
      </div>
    </div>

    <div class="carousel-track-container">
      <div class="carousel-track" style="transform: {trackTransform}">
        {#each testimonials as t}
          <div class="testimonial-card">
            <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="testimonial-quote">"{t.quote}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">{t.avatarLetter}</div>
              <div>
                <div class="author-name">{t.authorName}</div>
                <div class="author-detail">{t.detail}</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  section { padding: 6rem 2rem; }

  .testimonials-section {
    max-width: 1200px;
    margin: 0 auto;
  }

  .testimonials-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3rem;
  }

  .carousel-nav {
    display: flex;
    gap: 0.5rem;
  }

  .carousel-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid var(--light-line);
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: var(--espresso);
    transition: all 0.3s;
  }

  .carousel-btn:hover {
    background: var(--espresso);
    color: var(--milk);
    border-color: var(--espresso);
  }

  .carousel-track-container {
    overflow: hidden;
    margin: 0 -0.75rem;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .testimonial-card {
    flex: 0 0 calc(50% - 1.5rem);
    margin: 0 0.75rem;
    background: var(--milk);
    border: 1px solid var(--light-line);
    border-radius: 12px;
    padding: 2.5rem;
    position: relative;
  }

  .testimonial-stars {
    color: var(--amber);
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    margin-bottom: 1.25rem;
  }

  .testimonial-quote {
    font-size: 1.05rem;
    line-height: 1.75;
    font-weight: 300;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: var(--dark-roast);
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .author-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--amber), var(--medium-roast));
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 1rem;
    color: var(--milk);
    flex-shrink: 0;
  }

  .author-name {
    font-weight: 500;
    font-size: 0.9rem;
  }

  .author-detail {
    font-size: 0.78rem;
    color: var(--warm-gray);
    font-weight: 300;
  }

  @media (max-width: 900px) {
    .testimonial-card { flex: 0 0 calc(100% - 1.5rem); }
    .testimonials-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }
  }
</style>
