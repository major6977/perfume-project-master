gsap.from(".fade-up", {
  duration: 1.5,
  opacity: 0,
  y: "50%",
  ease: "ease-in",
  delay: 1.5,
});

gsap.from("#right-img", {
  duration: 1.5,
  opacity: 0,
  stagger: 2,
  x: "25%",
  ease: "ease-in",
  delay: 1.5,
});

gsap.from(".reviews2-cont", {
  duration: 1,
  opacity: 0,
  delay: 3.25,
  stagger: 0.5,
  ease: "ease-in",
  y: "50%",
});
