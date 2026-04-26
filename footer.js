// ============================================================
//  Rudra — Premium Shared Footer
//  Include this script in every page:
//  <script src="/footer.js"></script>
// ============================================================

(function () {
  const html = `
    <footer class="dark-footer">
      <div class="footer-inner">

        <div class="footer-col brand-col">
          <a href="index.html" class="footer-logo-link">
            <img src="/images/logo.png" alt="Rudra Logo" style="max-width: 180px; margin-bottom: 10px;"> 
          </a>
          <p class="brand-desc">We started as aspiring entrepreneurs committed to achieving excellence in our services and ensuring the satisfaction of our clients. Perseverance and consistency have led us to our present: providing services to leading companies and maintaining solar plants.</p>
        </div>

        <div class="footer-col accordion-col">
          <h5 class="accordion-toggle">Useful Links <i class="fas fa-chevron-down toggle-icon"></i></h5>
          <div class="accordion-content">
            <div class="useful-links-grid">
              <a href="/about-us">About Us</a>
              <a href="/services">Services</a>
              <a href="/projects">Projects</a>
              <a href="/clients">Clients</a>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
        </div>

        <div class="footer-col accordion-col">
          <h5 class="accordion-toggle">Get in Touch <i class="fas fa-chevron-down toggle-icon"></i></h5>
          <div class="accordion-content">
            <div class="contact-info-list">
              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <p>241, Hanwant B'BJS Gali.14<br>Near Meri Udan School,<br>BJS Colony Jodhpur-342006</p>
              </div>
              <div class="info-item">
                <i class="far fa-clock"></i>
                <p>Mon to Sat : 9:30AM to 6:30PM<br>Sun : Closed</p>
              </div>
              <div class="socials">
                <a href="https://www.instagram.com/rudra_managements" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-col accordion-col">
          <h5 class="accordion-toggle">Contact Us <i class="fas fa-chevron-down toggle-icon"></i></h5>
          <div class="accordion-content">
            <div class="dept-contact-list">
              
              <div class="dept-block">
                <h6>Sales & Marketing:</h6>
                <a href="tel:+919509224116"><i class="fas fa-phone-alt"></i> +91 95092 24116</a>
                <a href="mailto:sales@rudhragreen.com"><i class="fas fa-envelope"></i> sales@rudhragreen.com</a>
              </div>

              <div class="dept-block">
                <h6>Procurement:</h6>
                <a href="tel:+919828344455"><i class="fas fa-phone-alt"></i> +91 98283 44455</a>
                <a href="mailto:procurement@rudhragreen.com"><i class="fas fa-envelope"></i> procurement@rudhragreen.com</a>
              </div>

              <div class="dept-block">
                <h6>HR & Recruitment:</h6>
                <a href="tel:+919116729736"><i class="fas fa-phone-alt"></i> +91 91167 29736</a>
                <a href="mailto:hr@rudhramanagements.com"><i class="fas fa-envelope"></i> hr@rudhramanagements.com</a>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="footer-bottom-bar">
        <p>Copyright © ${new Date().getFullYear()} <span class="text-orange">Rudra Managements</span>. All rights reserved. Designed By <span class="text-orange">Vyukta</span>.</p>
        <button id="backToTop" class="back-to-top" aria-label="Back to top"><i class="fas fa-arrow-up"></i></button>
      </div>
    </footer>
  `;

  // Inject footer at the very end of <body>
  document.body.insertAdjacentHTML('beforeend', html);

  // --- Accordion Logic for Mobile ---
  const toggles = document.querySelectorAll('.accordion-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        toggle.classList.toggle('active');
        const content = toggle.nextElementSibling;
        if (toggle.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = null;
        }
      }
    });
  });

  // Handle Resize
  window.addEventListener('resize', () => {
    const contents = document.querySelectorAll('.accordion-content');
    if (window.innerWidth > 900) {
      contents.forEach(content => content.style.maxHeight = 'none');
    } else {
      contents.forEach(content => {
        if (!content.previousElementSibling.classList.contains('active')) {
          content.style.maxHeight = null;
        }
      });
    }
  });

  // --- Back to Top Logic ---
  const backBtn = document.getElementById('backToTop');
  if(backBtn){
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();