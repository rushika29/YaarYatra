document.addEventListener("DOMContentLoaded", () => {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    let del = 0.5;
    let numSections = 5; // Number of slider sections

    function animateSection(i) {
        // Animation for hiding the current section
        tl.to(`#hero-${i} h2`, 1, {
            opacity: 0,
            ease: "power2.inOut",
            delay: del
        })
        .to(`#hero-${i} h1`, 1, {
            opacity: 0,
            ease: "power2.inOut"
        }, "-=0.6")
        .to(`#hero-${i} h3`, 1, {
            opacity: 0,
            ease: "power2.inOut"
        }, "-=0.6")
        .to(`#hero-${i} .hi-${i}`, 1, {
            opacity: 0,
            ease: "power2.inOut"
        }, "-=1");

        // Determine the next section index
        let nextIndex = (i + 1) % numSections;

        // Animation for showing the next section
        tl.to(`#hero-${nextIndex} h2`, 1, {
            opacity: 1,
            ease: "power2.inOut"
        })
        .to(`#hero-${nextIndex} h1`, 1, {
            opacity: 1,
            ease: "power2.inOut"
        }, "-=0.6")
        .to(`#hero-${nextIndex} h3`, 1, {
            opacity: 1,
            ease: "power2.inOut"
        }, "-=0.6")
        .to(`#hero-${nextIndex} .hi-${nextIndex}`, 1, {
            opacity: 1,
            ease: "power2.inOut"
        }, "-=1");
    }

    // Initialize animations for all sections
    for (let i = 0; i < numSections; i++) {
        animateSection(i);
    }
});
