/* ============================================
   NEHA EVENT 3.0 - Multi-Template Engine
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  // ----- TEMPLATE DEFINITIONS -----
  // Each template has completely different hero HTML
  const templates = {
    festival: {
      hero: `
        <div class="hero-bg">
          <div class="hero-orb" style="--x:20%;--y:30%;--s:1"></div>
          <div class="hero-orb" style="--x:80%;--y:60%;--s:1.4"></div>
          <div class="hero-orb" style="--x:50%;--y:10%;--s:0.7"></div>
        </div>
        <div class="hero-grid-overlay"></div>
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge"><span class="dot"></span> Trusted by 200+ Clients</div>
            <h1>Everything You Need<br/>for Your <span class="gradient-text">Next Event</span></h1>
            <p class="hero-desc">From display stands and digital screens to venue and event management — Neha Event delivers premium rental solutions with transparent daily rates.</p>
            <div class="hero-actions">
              <a href="#catalog" class="btn btn-primary">Browse Rates &#8594;</a>
              <a href="#contact" class="btn btn-ghost">Get a Quote</a>
            </div>
            <div class="hero-strip">
              <div class="hero-strip-item"><h3><span class="counter">26</span>+</h3><p>Products on Rent</p></div>
              <div class="hero-strip-item"><h3><span class="counter">200</span>+</h3><p>Happy Clients</p></div>
              <div class="hero-strip-item"><h3><span class="counter">4.8</span></h3><p>Avg. Rating</p></div>
            </div>
          </div>
        </div>
        <div class="hero-float">
          <div class="hero-float-card" style="--i:0"><div class="label">Display Stand</div><div class="value gradient-text">INR 400</div><div class="label">/ day</div></div>
          <div class="hero-float-card" style="--i:1"><div class="label">Digital Screen 65"</div><div class="value gradient-text">INR 3,000</div><div class="label">/ day</div></div>
          <div class="hero-float-card" style="--i:2"><div class="label">Golden Stand</div><div class="value gradient-text">INR 500</div><div class="label">/ day</div></div>
        </div>`
    },
    royal: {
      hero: `
        <div class="hero-bg"></div>
        <div class="hero-pattern"></div>
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge"><span class="dot"></span> Established 2019</div>
            <h1>Premium Event<br/>Rentals with a<br/><span class="gradient-text">Royal Touch</span></h1>
            <p class="hero-desc">Exhibition displays, digital screens, luxury furniture, and full event management — all with transparent pricing and white-glove service.</p>
            <div class="hero-actions">
              <a href="#catalog" class="btn btn-primary">Explore Catalog &#8594;</a>
              <a href="#contact" class="btn btn-outline">Book Consultation</a>
            </div>
            <div class="hero-strip">
              <div class="hero-strip-item"><h3><span class="counter">26</span>+</h3><p>Products</p></div>
              <div class="hero-strip-item"><h3><span class="counter">200</span>+</h3><p>Clients</p></div>
              <div class="hero-strip-item"><h3><span class="counter">4.8</span></h3><p>Rating</p></div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-visual-inner">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=520&fit=crop" alt="Luxury event" loading="lazy" />
              <div class="hero-visual-card">
                <span>Starting from</span>
                <strong>INR 400 / day</strong>
              </div>
            </div>
          </div>
        </div>`
    },
    ocean: {
      hero: `
        <div class="hero-bg"></div>
        <div class="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80 C360,120 720,0 1080,60 L1440,40 L1440,120 L0,120 Z" fill="var(--bg)"/>
            <path d="M0,60 C240,100 480,20 720,50 L1080,30 L1440,50 L1440,120 L0,120 Z" fill="var(--bg2)" opacity=".6"/>
          </svg>
        </div>
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge"><span class="dot"></span> Pune's Trusted Rental Partner</div>
            <h1>Rental Equipment<br/>for Every <span class="gradient-text">Event</span></h1>
            <p class="hero-desc">Display stands, digital screens, furniture, venue, and event management. Clear daily rates, quality equipment, on-time delivery.</p>
            <div class="hero-actions">
              <a href="#catalog" class="btn btn-primary">See Pricing</a>
              <a href="#contact" class="btn btn-outline">Get Quote</a>
            </div>
            <div class="hero-strip">
              <div class="hero-strip-item"><h3><span class="counter">26</span>+</h3><p>Products</p></div>
              <div class="hero-strip-item"><h3><span class="counter">200</span>+</h3><p>Events</p></div>
              <div class="hero-strip-item"><h3><span class="counter">4.8</span></h3><p>Rating</p></div>
              <div class="hero-strip-item"><h3><span class="counter">5</span>+</h3><p>Years</p></div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-visual-main">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=375&fit=crop" alt="Event setup" loading="lazy" />
            </div>
            <div class="hero-visual-strip">
              <div class="pill"><strong>26+</strong><span>Products</span></div>
              <div class="pill"><strong>200+</strong><span>Events</span></div>
              <div class="pill"><strong>4.8</strong><span>Rating</span></div>
            </div>
          </div>
        </div>`
    },
    bloom: {
      hero: `
        <div class="hero-bg">
          <div class="hero-blob" style="--x:15%;--y:25%;--s:1"></div>
          <div class="hero-blob" style="--x:85%;--y:75%;--s:1.2"></div>
        </div>
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge"><span class="dot"></span> Creative Event Solutions</div>
            <h1>Make Your Event<br/><span class="gradient-text">Bloom</span></h1>
            <p class="hero-desc">From display stands to digital screens, furniture, venue, and full event management — we bring your vision to life.</p>
            <div class="hero-actions">
              <a href="#catalog" class="btn btn-primary">Start Browsing</a>
              <a href="#contact" class="btn btn-outline">Talk to Us</a>
            </div>
            <div class="hero-strip">
              <div class="hero-strip-item"><h3><span class="counter">26</span></h3><p>Products</p></div>
              <div class="hero-strip-item"><h3><span class="counter">200</span>+</h3><p>Events</p></div>
              <div class="hero-strip-item"><h3><span class="counter">4.8</span></h3><p>Rating</p></div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-visual-main">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop" alt="Event decoration" loading="lazy" />
            </div>
            <div class="hero-visual-accent">NE</div>
            <div class="hero-visal-card">
              <strong>INR 400</strong>
              <span style="font-size:.72rem;color:var(--text3)">Starting / day</span>
            </div>
          </div>
        </div>`
    }
  };

  // ----- STATE -----
  let currentTheme = localStorage.getItem('neha-theme') || 'festival';

  // ----- THEME SWITCHER (buttons in DOM) -----
  const themeBtns = document.querySelectorAll('.theme-btn');
  applyTheme(currentTheme);
  themeBtns.forEach(b => b.classList.toggle('active', b.dataset.theme === currentTheme));

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTheme(btn.dataset.theme);
    });
  });

  function switchTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('neha-theme', theme);
    themeBtns.forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`.theme-btn[data-theme="${theme}"]`).forEach(b => b.classList.add('active'));
    applyTheme(theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Swap hero HTML
    const hero = document.getElementById('hero');
    if (hero && templates[theme]) {
      hero.innerHTML = templates[theme].hero;
      // Re-run counter observer
      initCounters();
    }

    // Re-bind smooth scroll on new links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function(e) {
        const t = document.querySelector(this.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });

    // Re-trigger scroll animations
    if (window.observer) {
      window.observer.disconnect();
      document.querySelectorAll('.anim-up, .anim-left, .anim-right').forEach(el => window.observer.observe(el));
    }
  }

  // ----- MOBILE NAV -----
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-center');
  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    nav?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- NAVBAR SCROLL -----
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 80));

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  const anchors = document.querySelectorAll('.nav-center a[href^="#"]');
  function highlightNav() {
    let cur = '';
    sections.forEach(s => {
      const t = s.offsetTop - 150, b = t + s.offsetHeight;
      if (window.scrollY >= t && window.scrollY < b) cur = s.id;
    });
    anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`));
  }
  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // ----- SCROLL ANIMATIONS -----
  const animateElements = () => document.querySelectorAll('.anim-up, .anim-left, .anim-right');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target); }
    });
  }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });
  animateElements().forEach(el => observer.observe(el));
  window.observer = observer;

  // ----- COUNTERS -----
  function initCounters() {
    document.querySelectorAll('.counter').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          const val = parseInt(el.textContent.replace(/[+,]/g, ''));
          if (isNaN(val)) return;
          const suffix = el.textContent.replace(/[\d]/g,'').trim();
          let cur = 0;
          const inc = Math.ceil(val / 60);
          const t = setInterval(() => {
            cur += inc;
            if (cur >= val) { cur = val; clearInterval(t); }
            el.textContent = cur.toLocaleString() + (suffix ? ' '+suffix : '');
          }, 25);
          obs.unobserve(el);
        }
      }, { threshold: .5 });
      obs.observe(el);
    });
  }

  // ----- LIGHTBOX -----
  const lb = document.querySelector('.lightbox');
  if (lb) {
    const lbImg = lb.querySelector('img');
    const lbClose = lb.querySelector('.lightbox-close');
    const lbPrev = lb.querySelector('.lightbox-prev');
    const lbNext = lb.querySelector('.lightbox-next');
    let images = [], idx = 0;

    document.addEventListener('click', e => {
      const item = e.target.closest('[data-lightbox]');
      if (!item) return;
      const img = item.querySelector('img');
      if (!img) return;
      images = [{ src: img.src, alt: img.alt }];
      idx = 0;
      lbImg.src = images[idx].src;
      lbImg.alt = images[idx].alt;
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    function closeLb() { lb.classList.remove('active'); document.body.style.overflow = ''; }
    function navLb(dir) { idx = (idx + dir + images.length) % images.length; lbImg.src = images[idx].src; lbImg.alt = images[idx].alt; }
    if (lbClose) lbClose.addEventListener('click', closeLb);
    if (lbPrev) lbPrev.addEventListener('click', () => navLb(-1));
    if (lbNext) lbNext.addEventListener('click', () => navLb(1));
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') navLb(-1);
      if (e.key === 'ArrowRight') navLb(1);
    });
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  }

  // ----- FORM -----
  const form = document.querySelector('.contact-form-box form');
  const success = form?.querySelector('.form-success');
  const fields = form?.querySelector('.form-fields');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const orig = btn.innerHTML;
      btn.innerHTML = 'Sending...'; btn.disabled = true;
      try {
        const fd = new FormData(form);
        const resp = await fetch(form.action, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } });
        if (resp.ok) {
          if (fields) fields.style.display = 'none';
          if (success) success.classList.add('show');
          form.reset();
        } else {
          const err = await resp.json();
          alert('Error: ' + (err.error || 'Please try again.'));
        }
      } catch {
        alert('Network error. Please email us at info@nehaevent.com');
      } finally {
        btn.innerHTML = orig; btn.disabled = false;
      }
    });
  }

});
