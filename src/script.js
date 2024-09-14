      document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(ScrollToPlugin)
        gsap.fromTo([".samsung-logo", ".footer-paragraph", ".save-now"], 
            { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1});  
            gsap.fromTo(".samsung-logo",
                { y: 0, x: 0 },
                { y: -50, duration: 1.5, delay: 1 }
            );
            gsap.fromTo(".div-paragraph", 
                { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 2});        
        });