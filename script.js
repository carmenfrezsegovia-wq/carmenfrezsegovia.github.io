// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Basic parallax effect for background images
    const textureBg = document.querySelector('.texture-bg');
    const floralBg = document.querySelector('.floral-bg');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        
        // Move backgrounds slightly at different speeds
        if (textureBg) {
            textureBg.style.transform = `translateY(${scrollY * 0.15}px)`;
        }
        if (floralBg) {
            floralBg.style.transform = `translateY(${scrollY * 0.05}px)`;
        }
        
        // Element fade in on scroll
        const scrapbooks = document.querySelectorAll('.scrapbook-element');
        scrapbooks.forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0) rotate(0deg)';
            }
        });
    });

    // Initial styles for fade in
    const scrapbooks = document.querySelectorAll('.scrapbook-element');
    scrapbooks.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(50px) rotate(-1deg)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    // Trigger scroll once to show initial elements
    window.dispatchEvent(new Event('scroll'));
});
