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
    `;
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});