document.addEventListener("DOMContentLoaded", () => {
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
  let del = 0.5;
  let numSections = 5; // Number of slider sections

  function animateSection(currentIndex, nextIndex) {
    // Animation for hiding the current section
    tl.to(`#hero-${currentIndex} h2`, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: del
    })
    .to(`#hero-${currentIndex} h1`, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
    }, "-=0.6")
    .to(`#hero-${currentIndex} h3`, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
    }, "-=0.6")
    .to(`#hero-${currentIndex} .hi-${currentIndex}`, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
    }, "-=1");

    // Animation for showing the next section
    tl.to(`#hero-${nextIndex} h2`, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
    })
    .to(`#hero-${nextIndex} h1`, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
    }, "-=0.6")
    .to(`#hero-${nextIndex} h3`, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
    }, "-=0.6")
    .to(`#hero-${nextIndex} .hi-${nextIndex}`, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
    }, "-=1");
  }

  // Initialize animations for all sections
  for (let i = 0; i < numSections; i++) {
    let nextIndex = (i + 1) % numSections;
    animateSection(i, nextIndex);
  }
});
