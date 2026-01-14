
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
class Parallax {
    constructor() {
        this.elements = document.querySelectorAll('[data-speed]');
        this.resize();
        this.init();
    }
    resize() {
        this.windowHeight = window.innerHeight;
    }
    init() {
        window.addEventListener('resize', this.resize.bind(this));
        lenis.on('scroll', ({ scroll }) => {
            this.animate(scroll);
        });
        this.animate(window.scrollY);
    }
    animate(scrollY) {
        this.elements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-speed'));
            const rect = el.getBoundingClientRect();
            const top = rect.top + scrollY;
            const center = top + (rect.height / 2);
            const move = (scrollY + this.windowHeight / 2 - center) * speed;
            if (el.tagName === 'IMG') {
                el.style.transform = `translate3d(0, ${move}px, 0) scale(1.1)`;
            } else {
                el.style.transform = `translate3d(0, ${move}px, 0)`;
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new Parallax();
});
const observerOptions = {
    threshold: 0.15, 
    rootMargin: "0px"
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    revealElements.forEach(el => observer.observe(el));
});
