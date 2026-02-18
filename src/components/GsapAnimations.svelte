<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  $effect(() => {
    // ── Hero: staggered text reveal with parallax ──
    const heroTl = gsap.timeline();
    heroTl
      .fromTo('.hero-bg', { scale: 1.15 }, { scale: 1.05, duration: 1.5, ease: 'power2.out' })
      .fromTo('.hero-tag', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.2)
      .fromTo('.hero h1, .hero .section-heading-hero', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.4)
      .fromTo('.hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.6)
      .fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.8)
      .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.1);

    // Hero parallax on scroll
    gsap.to('.hero-bg', {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // ── Features strip: staggered slide-up ──
    gsap.from('.feature-item', {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.features-strip',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // ── Story: image slides in from left, text from right ──
    gsap.from('.story-image', {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.story',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.story-text', {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.story',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Story stats: count-up animation
    const statNums = document.querySelectorAll('.stat-num');
    statNums.forEach((el) => {
      const text = el.textContent || '';
      const numMatch = text.match(/(\d+)/);
      if (numMatch) {
        const target = parseInt(numMatch[1]);
        const suffix = text.replace(numMatch[1], '');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      }
    });

    // ── Coffee Menu: header + cards stagger ──
    gsap.from('.menu-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.menu-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.menu-filters', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.menu-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.menu-card', {
      y: 60,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.menu-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // ── How It Works: steps stagger with scale ──
    gsap.from('.how-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.how-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.how-step', {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.how-steps',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // ── Pricing: cards fan up with stagger ──
    gsap.from('.pricing-card', {
      y: 70,
      opacity: 0,
      rotateX: 8,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.pricing-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // ── Testimonials: slide in from right ──
    gsap.from('.testimonials-header, .testimonials-section .testimonials-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.testimonial-card', {
      x: 100,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.carousel-track-container',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // ── CTA: scale up with fade ──
    gsap.from('.cta-content', {
      scale: 0.92,
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // ── Newsletter: slide up ──
    gsap.from('.newsletter-inner', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.newsletter-section',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // ── Footer: stagger columns ──
    gsap.from('.footer-grid > *', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    // ── Magnetic hover on CTA buttons ──
    document.querySelectorAll('.btn-primary, .nav-cta').forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    // ── Parallax on story image ──
    gsap.to('.story-image img', {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.story-image',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // ── Parallax on menu card images ──
    document.querySelectorAll('.menu-card-img img').forEach((img) => {
      gsap.to(img, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.menu-card'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  });
</script>
