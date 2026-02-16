<script>
  import { features } from '../data/features';
</script>

<div class="features-strip">
  {#each features as feature}
    <div class="feature-item">
      <span class="feature-icon">{feature.icon}</span>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  {/each}
</div>

<style>
  .features-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid var(--light-line);
    border-bottom: 1px solid var(--light-line);
  }

  .feature-item {
    padding: 3rem 2rem;
    text-align: center;
    border-right: 1px solid var(--light-line);
    transition: background 0.3s;
  }

  .feature-item:last-child { border-right: none; }
  .feature-item:hover { background: rgba(200, 135, 59, 0.04); }

  .feature-icon {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    display: block;
  }

  h3 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    color: var(--warm-gray);
    line-height: 1.6;
    font-weight: 300;
  }

  @media (max-width: 900px) {
    .features-strip { grid-template-columns: 1fr; }
    .feature-item {
      border-right: none;
      border-bottom: 1px solid var(--light-line);
      padding: 2rem;
    }
    .feature-item:last-child { border-bottom: none; }
  }
</style>
