window.addEventListener("load", () => {

  const tl = gsap.timeline();

  // pequeño delay inicial (impacto visual)
  tl.to({}, { duration: 0.8 });

  // abre “las manos” (paneles)
  tl.to(".loader-panel.left", {
    x: "-100%",
    duration: 1.2,
    ease: "power4.inOut"
  }, 0);

  tl.to(".loader-panel.right", {
    x: "100%",
    duration: 1.2,
    ease: "power4.inOut"
  }, 0);

  // fade del gif central
  tl.to(".loader-center", {
    opacity: 0,
    scale: 0.8,
    duration: 5
  }, 0.2);

  // reveal del contenido
  tl.to("#app", {
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power2.out"
  }, 1);

  // eliminar loader
  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
    }
  });

});


