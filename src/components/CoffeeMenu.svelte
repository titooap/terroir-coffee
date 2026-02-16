<script>
  import { coffees } from '../data/coffees';
  import { fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  let activeFilter = $state('all');

  let filteredCoffees = $derived(
    activeFilter === 'all'
      ? coffees
      : coffees.filter(c => c.origin === activeFilter)
  );

  const filters = [
    { key: 'all', label: 'All Origins' },
    { key: 'africa', label: 'Africa' },
    { key: 'americas', label: 'Americas' },
    { key: 'asia', label: 'Asia Pacific' },
  ];
</script>

<section class="menu-section" id="menu">
  <div class="menu-inner">
    <div class="menu-header">
      <span class="section-tag" style="color: var(--golden);">The Collection</span>
      <h2 class="section-heading" style="color: var(--cream);">Our Coffee Variants</h2>
      <p class="section-sub" style="color: rgba(245, 239, 230, 0.55); margin: 0 auto; text-align: center;">From bright African naturals to rich South American washed lots — explore the world in every cup.</p>
    </div>

    <div class="menu-filters">
      {#each filters as f}
        <button
          class="menu-filter-btn"
          class:active={activeFilter === f.key}
          onclick={() => activeFilter = f.key}
        >{f.label}</button>
      {/each}
    </div>

    <div class="menu-grid">
      {#each filteredCoffees as coffee (coffee.name)}
        <div class="menu-card" animate:flip={{ duration: 300 }} transition:fade={{ duration: 250 }}>
          <div class="menu-card-img">
            <img src={coffee.image} alt={coffee.imageAlt} loading="lazy">
            <span class="menu-card-origin">{coffee.country}</span>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-top">
              <div class="menu-card-name">{coffee.name}</div>
              <div class="menu-card-price">${coffee.price}</div>
            </div>
            <p class="menu-card-notes">{coffee.notes}</p>
            <div class="menu-card-meta">
              <div class="meta-item">
                <span class="meta-label">Roast</span>
                <div class="menu-card-roast">
                  {#each Array(5) as _, i}
                    <span class="roast-dot" class:filled={i < coffee.roastLevel}></span>
                  {/each}
                </div>
              </div>
              <div class="meta-item">
                <span class="meta-label">Process</span>
                <span class="meta-value">{coffee.process}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Altitude</span>
                <span class="meta-value">{coffee.altitude}</span>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="menu-view-all">
      <a href="#">View Full Collection &rarr;</a>
    </div>
  </div>
</section>

<style>
  .menu-section {
    background: var(--espresso);
    color: var(--cream);
    padding: 6rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .menu-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba(200, 135, 59, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(92, 58, 30, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .menu-inner {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .menu-header { text-align: center; margin-bottom: 3rem; }

  .menu-filters {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .menu-filter-btn {
    font-family: var(--font-body);
    font-size: 0.78rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.55rem 1.3rem;
    border-radius: 100px;
    border: 1px solid rgba(245, 239, 230, 0.15);
    background: transparent;
    color: rgba(245, 239, 230, 0.5);
    cursor: pointer;
    transition: all 0.3s;
  }

  .menu-filter-btn:hover {
    border-color: var(--amber);
    color: var(--cream);
  }

  .menu-filter-btn.active {
    background: var(--amber);
    border-color: var(--amber);
    color: var(--milk);
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .menu-card {
    background: rgba(245, 239, 230, 0.04);
    border: 1px solid rgba(245, 239, 230, 0.08);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.4s, box-shadow 0.4s, border-color 0.4s;
    cursor: default;
  }

  .menu-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border-color: rgba(200, 135, 59, 0.25);
  }

  .menu-card-img {
    position: relative;
    height: 220px;
    overflow: hidden;
  }

  .menu-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .menu-card:hover .menu-card-img img { transform: scale(1.08); }

  .menu-card-img::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, var(--espresso), transparent);
    pointer-events: none;
  }

  .menu-card-origin {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    background: rgba(26, 17, 10, 0.7);
    backdrop-filter: blur(8px);
    color: var(--golden);
    border-radius: 100px;
    border: 1px solid rgba(200, 135, 59, 0.2);
    z-index: 2;
  }

  .menu-card-body { padding: 1.5rem; }

  .menu-card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }

  .menu-card-name {
    font-family: var(--font-display);
    font-size: 1.2rem;
    color: var(--cream);
    line-height: 1.2;
  }

  .menu-card-price {
    font-family: var(--font-display);
    font-size: 1.1rem;
    color: var(--amber);
    white-space: nowrap;
    margin-left: 1rem;
  }

  .menu-card-notes {
    font-size: 0.82rem;
    color: rgba(245, 239, 230, 0.45);
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 1rem;
    font-style: italic;
  }

  .menu-card-meta {
    display: flex;
    gap: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(245, 239, 230, 0.06);
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .meta-label {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(245, 239, 230, 0.3);
  }

  .meta-value {
    font-size: 0.8rem;
    color: rgba(245, 239, 230, 0.7);
    font-weight: 400;
  }

  .menu-card-roast {
    display: flex;
    gap: 3px;
    align-items: center;
  }

  .roast-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid rgba(245, 239, 230, 0.2);
  }

  .roast-dot.filled { background: var(--amber); border-color: var(--amber); }

  .menu-view-all {
    text-align: center;
    margin-top: 3rem;
  }

  .menu-view-all a {
    font-size: 0.82rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(245, 239, 230, 0.5);
    text-decoration: none;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid rgba(245, 239, 230, 0.2);
    transition: color 0.3s, border-color 0.3s;
  }

  .menu-view-all a:hover {
    color: var(--golden);
    border-color: var(--golden);
  }

  @media (max-width: 900px) {
    .menu-grid {
      grid-template-columns: 1fr;
      max-width: 420px;
      margin: 0 auto;
    }
  }
</style>
