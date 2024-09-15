document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin);

    const animationPromise = new Promise((resolve) => {
        gsap.fromTo([".samsung-logo", ".footer-paragraph", ".save-now"], 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 1, onComplete: resolve }
        );
        
        gsap.fromTo(".samsung-logo",
            { y: 0, x: 0 },
            { y: -50, duration: 1, delay: 2 }
        );
        
        gsap.fromTo([".animation-par"], 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 3}
        );
    });

    animationPromise.then(() => {
        // Додаткова затримка після завершення анімації
        setTimeout(() => {
            const sectionFrame1 = document.querySelector('.section-frame1');
            if (sectionFrame1) {
                sectionFrame1.style.display = 'none';
            }

            const sectionFrame = document.querySelector('.section-frame');
            if (sectionFrame) {
                sectionFrame.style.display = 'flex';
                gsap.fromTo(".frame", 
                    { x: -100, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1 }
                );
            }
        }, 4000); const sections = document.querySelectorAll('.section-frame');
        let currentIndex = 0;
      
        function updateSections() {
          sections.forEach((section, index) => {
            section.style.display = index === currentIndex ? 'flex' : 'none';
          });
        }
      
        updateSections();
      
        const nextButtons = document.querySelectorAll('.swiper-button-next');
        nextButtons.forEach(button => {
          button.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % sections.length;
            updateSections();
          });
        });
      
        const prevButtons = document.querySelectorAll('.swiper-button-prev');
        prevButtons.forEach(button => {
          button.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + sections.length) % sections.length;
            updateSections();
          });
        });
        
    });})
