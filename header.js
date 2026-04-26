// ============================================================
//  Rudra — Shared Header
//  Include this script in every page:
//  <script src="header.js"></script>
//  Add <style src="shared.css"></style> for shared styles.
// ============================================================

(function () {
  // Detect which page is active for nav highlight
  const page = location.pathname.split('/').pop() || '/index.html';

  function navLink(href, label, file) {
    const isActive = page === file ? ' class="active"' : '';
    return `<li><a href="${href}"${isActive}>${label}</a></li>`;
  }

  const html = `
    <header>
      <div class="header-container">

        <a href="/" class="logo">
          <img src="/images/logo.png" alt="Rudra"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
          <span class="logo-wordmark" style="display:none;">RUD<span>RA</span></span>
        </a>

        <nav id="nav-menu">
          <ul>
            ${navLink('/about-us',              'About Us',      'about-us')}
            ${navLink('/services',          'Services', 'services')}
            ${navLink('/projects',           'Projects',   'projects')}
            ${navLink('/clients',          'Clients',  'clients')}
            ${navLink('/contact',      'Contact',    'contact')}
          </ul>
        </nav>

        <div class="header-right">
          <a href="index.html#contact" class="btn-contact">Get a Quote</a>
        </div>

        <div class="hamburger" id="hamburger">
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  `;

  // Inject header at the very top of <body>
  document.body.insertAdjacentHTML('afterbegin', html);

  // Hamburger toggle
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('nav-menu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  });
})();