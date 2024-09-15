document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin);

    const animationPromise = new Promise((resolve) => {
        gsap.fromTo([".samsung-logo", ".footer-paragraph", ".save-now"], 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, onComplete: resolve }
        );
        
        gsap.fromTo(".samsung-logo",
            { y: 0, x: 0 },
            { y: -50, duration: 1.5, delay: 1 }
        );
        
        gsap.fromTo([".animation-par"], 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 2}
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
            }

            // Додаткова логіка після зміни стилів
            console.log('Animation completed. Styles changed.');
        }, 3000); // Затримка на 1 секунду
    });
});
    
        // Обробник події для кнопки "Read more..."
        // const readMoreLink = document.querySelector('.read-more a');
        // if (readMoreLink) {
        //     readMoreLink.addEventListener('click', (e) => {
        //         e.preventDefault(); // Запобігає стандартному поведінці посилання
    
        //         // Відкриття нової порожньої сторінки
        //         window.open('', '_blank');
    
        //         // Додаткова логіка при натисканні кнопки
        //         console.log('Read more button clicked. New page opened.');
        //     });
        // }
    