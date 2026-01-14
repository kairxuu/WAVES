document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
      <header>
          <div id="navbar">
              <nav id="nav-container">
                  <div id="logo">
                       <a href="index.html"><img src="src/public/IMG/logo.svg" alt="Logo"></a>
                  </div>
                  <div id="hamburger">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
                  <ul id="menu">
                      <li><a href="index.html">Accueil</a></li>
                      <li><a href="about.html">A propos</a></li>
                      <li><a href="contact.html">Contact</a></li>
                  </ul>
              </nav>
          </div>
      </header>
      <button id="scrollToTopBtn" aria-label="Haut de page">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    `;
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
        const mobileFooterHTML = `
            <div class="mobile-menu-footer">
                <a href="contact.html" class="mobile-cta">Agir Maintenant</a>
                <div style="margin-top: 20px; color: #86868b; font-size: 0.9rem;">
                    Suivez-nous sur les réseaux
                </div>
            </div>
        `;
        menuEl.insertAdjacentHTML('beforeend', mobileFooterHTML);
    }
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('#menu a');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.style.color = '#0071e3'; 
        }
    });
    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            const isActive = menu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        });
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});