<script lang="ts">
  let email = $state('');
  let submitted = $state(false);

  async function handleSubmit(e: Event) {
    e.preventDefault();
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        submitted = true;
        email = '';
      }
    } catch {
      // Fallback for when API isn't running
      submitted = true;
      email = '';
    }
  }
</script>

<section class="newsletter-section">
  <div class="newsletter-inner">
    <span class="section-tag" style="color: var(--golden);">Stay in the Loop</span>
    <h2 class="section-heading" style="color: var(--cream);">Get brewing tips &amp;<br>early access</h2>
    <p class="section-sub" style="color: rgba(245, 239, 230, 0.5); margin: 0 auto 2rem; text-align: center;">Join our weekly newsletter for origin stories, brewing guides, and first dibs on limited-release lots.</p>
    <form class="newsletter-form" onsubmit={handleSubmit}>
      <input
        type="email"
        class="newsletter-input"
        placeholder="Your email address"
        required
        bind:value={email}
      >
      <button type="submit" class="newsletter-btn">
        {submitted ? 'Subscribed!' : 'Join'}
      </button>
    </form>
    <p class="newsletter-note">No spam, ever. Unsubscribe anytime. We respect your inbox like we respect our beans.</p>
  </div>
</section>

<style>
  .newsletter-section {
    background: var(--dark-roast);
    padding: 5rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .newsletter-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 50%, rgba(200, 135, 59, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .newsletter-inner {
    max-width: 580px;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }

  .newsletter-form {
    display: flex;
    gap: 0.75rem;
    max-width: 460px;
    margin: 0 auto;
  }

  .newsletter-input {
    flex: 1;
    padding: 0.9rem 1.25rem;
    font-family: var(--font-body);
    font-size: 0.88rem;
    font-weight: 300;
    background: rgba(245, 239, 230, 0.06);
    border: 1px solid rgba(245, 239, 230, 0.12);
    border-radius: 100px;
    color: var(--cream);
    outline: none;
    transition: border-color 0.3s, background 0.3s;
  }

  .newsletter-input::placeholder { color: rgba(245, 239, 230, 0.3); }

  .newsletter-input:focus {
    border-color: var(--amber);
    background: rgba(245, 239, 230, 0.08);
  }

  .newsletter-btn {
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.9rem 1.8rem;
    background: var(--amber);
    border: none;
    border-radius: 100px;
    color: var(--milk);
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;
  }

  .newsletter-btn:hover {
    background: var(--golden);
    box-shadow: 0 4px 20px rgba(200, 135, 59, 0.35);
  }

  .newsletter-note {
    font-size: 0.72rem;
    color: rgba(245, 239, 230, 0.3);
    margin-top: 1rem;
    font-weight: 300;
  }

  @media (max-width: 900px) {
    .newsletter-form { flex-direction: column; }
  }
</style>
