<script>
  let scrolled = $state(false);

  $effect(() => {
    const handler = () => { scrolled = window.scrollY > 60; };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<nav class:scrolled>
  <a href="#" class="nav-logo">Terroir</a>
  <ul class="nav-links">
    <li><a href="#story">Our Story</a></li>
    <li><a href="#menu">Coffee Menu</a></li>
    <li><a href="#pricing">Plans</a></li>
    <li><a href="#testimonials">Reviews</a></li>
  </ul>
  <a href="#pricing" class="nav-cta">Subscribe</a>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1.25rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s;
  }

  nav.scrolled {
    background: rgba(250, 247, 242, 0.85);
    backdrop-filter: blur(16px);
    box-shadow: 0 1px 0 var(--light-line);
  }

  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--milk);
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: color 0.4s;
  }

  nav.scrolled .nav-logo { color: var(--espresso); }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a {
    font-size: 0.85rem;
    font-weight: 500;
    color: rgba(255,253,249,0.75);
    text-decoration: none;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: color 0.3s;
  }

  nav.scrolled .nav-links a { color: var(--warm-gray); }
  .nav-links a:hover { color: var(--golden); }

  .nav-cta {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.6rem 1.4rem;
    background: var(--amber);
    color: var(--milk);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  }

  .nav-cta:hover {
    background: var(--golden);
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(200, 135, 59, 0.35);
  }

  @media (max-width: 900px) {
    .nav-links { display: none; }
  }
</style>
