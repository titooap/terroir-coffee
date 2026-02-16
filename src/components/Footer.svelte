<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="#" class="footer-logo">Terroir</a>
      <p>Specialty coffee roasted to order and delivered to your door. Sourced ethically, roasted obsessively.</p>
    </div>
    <div class="footer-col">
      <h4>Product</h4>
      <ul>
        <li><a href="#">Subscriptions</a></li>
        <li><a href="#">One-Time Orders</a></li>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Brewing Gear</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Sourcing</a></li>
        <li><a href="#">Sustainability</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Support</h4>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Shipping</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2026 Terroir Coffee Co. All rights reserved.</span>
    <span>Made with care &amp; good beans.</span>
  </div>
</footer>

<style>
  footer {
    background: var(--espresso);
    color: rgba(245, 239, 230, 0.5);
    padding: 4rem 2rem 2rem;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto 3rem;
  }

  .footer-logo {
    font-family: var(--font-display);
    font-size: 1.3rem;
    color: var(--milk);
    text-decoration: none;
    display: inline-block;
    margin-bottom: 1rem;
  }

  .footer-brand p {
    font-size: 0.85rem;
    line-height: 1.7;
    font-weight: 300;
    max-width: 280px;
  }

  .footer-col h4 {
    font-family: var(--font-display);
    color: var(--cream);
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .footer-col ul { list-style: none; }
  .footer-col li { margin-bottom: 0.6rem; }

  .footer-col a {
    color: rgba(245, 239, 230, 0.5);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 300;
    transition: color 0.3s;
  }

  .footer-col a:hover { color: var(--golden); }

  .footer-bottom {
    border-top: 1px solid rgba(245, 239, 230, 0.08);
    padding-top: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.78rem;
    font-weight: 300;
  }

  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .footer-brand { grid-column: 1 / -1; }
    .footer-bottom {
      flex-direction: column;
      gap: 0.75rem;
      text-align: center;
    }
  }
</style>
