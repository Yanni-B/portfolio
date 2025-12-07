const fadeElements = document.querySelectorAll('.fade-slide');

const appearOnScroll = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
};


window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll); 
