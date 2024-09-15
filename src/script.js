    //   document.addEventListener("DOMContentLoaded", (event) => {
    //     gsap.registerPlugin(ScrollToPlugin)
    //     gsap.fromTo([".samsung-logo", ".footer-paragraph", ".save-now"], 
    //         { x: -100, opacity: 0 },
    // { x: 0, opacity: 1, duration: 1});  
    //         gsap.fromTo(".samsung-logo",
    //             { y: 0, x: 0 },
    //             { y: -50, duration: 1.5, delay: 1 }
    //         );
    //         gsap.fromTo(".div-paragraph", 
    //             { x: -100, opacity: 0 },
    //     { x: 0, opacity: 1, duration: 1, delay: 2});  
    // //     gsap.fromTo(".frame2", 
    // //         { x: -100, opacity: 0 },
    // // { x: 0, opacity: 1, duration: 1, delay: 3});  
    //     });
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
            
            gsap.fromTo(".div-paragraph", 
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, delay: 2}
            );
        });
    
        animationPromise.then(() => {
            // Зміна стилів після завершення анімації
            const sectionFrame1 = document.querySelector('.section-frame1');
            if (sectionFrame1) {
                sectionFrame1.style.display = 'block';
            }
    
            const sectionFrame2 = document.querySelector('.section-frame2');
            if (sectionFrame2) {
                sectionFrame2.style.display = 'none';
            }
        });
    });
    