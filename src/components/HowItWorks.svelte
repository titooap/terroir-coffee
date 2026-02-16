<script>
  import { steps } from '../data/steps';
</script>

<section class="how-section" id="how">
  <div class="how-header">
    <span class="section-tag">How It Works</span>
    <h2 class="section-heading">From farm to your doorstep</h2>
    <p class="section-sub">Four simple steps to the best coffee you've ever had at home.</p>
  </div>
  <div class="how-steps">
    {#each steps as step}
      <div class="how-step">
        <div class="step-num">{step.number}</div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .how-section {
    background: var(--milk);
    padding: 6rem 2rem;
  }

  .how-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .how-header :global(.section-sub) {
    margin: 0 auto;
    text-align: center;
  }

  .how-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
  }

  .how-steps::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: 12%;
    right: 12%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--light-line), var(--light-line), transparent);
  }

  .how-step { text-align: center; position: relative; }

  .step-num {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: var(--latte);
    border: 2px solid var(--light-line);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 1.25rem;
    color: var(--amber);
    margin: 0 auto 1.25rem;
    position: relative;
    z-index: 2;
    transition: all 0.35s;
  }

  .how-step:hover .step-num {
    background: var(--amber);
    border-color: var(--amber);
    color: var(--milk);
    transform: scale(1.1);
  }

  h3 {
    font-family: var(--font-display);
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.84rem;
    color: var(--warm-gray);
    font-weight: 300;
    line-height: 1.6;
    max-width: 200px;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    .how-steps {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem 1.5rem;
    }
    .how-steps::before { display: none; }
  }
</style>
