document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin);

    const animationPromise = new Promise((resolve) => {
        gsap.fromTo([".samsung-logo", ".footer-paragraph", ".save-now"], 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 1 }
        );
        
        gsap.fromTo(".samsung-logo",
            { y: 0, x: 0 },
            { y: -20, duration: 1, delay: 2 }
        );
        
        gsap.fromTo([".animation-par"], 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 3,  onComplete: resolve}
        );
    });

    animationPromise.then(() => {
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
        }, 0);
        animationPromise.then(() => {
            gsap.fromTo(".image-section", 
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, delay: 0.5 }
            );
        });

        const sections = document.querySelectorAll('.section-frame');
        let currentIndex = 0;
        let autoScrollInterval;
        let userInteractionTimeout;

        function updateSections() {
            sections.forEach((section, index) => {
                section.style.display = index === currentIndex ? 'flex' : 'none';
            });
        }

        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % sections.length;
                updateSections();
            }, 5000); 
        }

        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
            clearTimeout(userInteractionTimeout);
        }

        updateSections();

        const nextButtons = document.querySelectorAll('.swiper-button-next');
        nextButtons.forEach(button => {
            button.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % sections.length;
                updateSections();
                stopAutoScroll();
                userInteractionTimeout = setTimeout(startAutoScroll, 30000);
            });
        });

        const prevButtons = document.querySelectorAll('.swiper-button-prev');
        prevButtons.forEach(button => {
            button.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + sections.length) % sections.length;
                updateSections();
                stopAutoScroll();
                userInteractionTimeout = setTimeout(startAutoScroll, 30000);
            });
        });

        setTimeout(startAutoScroll, 0);
    });

    const readMoreLinks = document.querySelectorAll('.read-more a');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.open('', '_blank');
        });
    });
    const saveButtons = document.querySelectorAll('.button-shop-now');
    saveButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.open('', '_blank');
        });
    });
   });



