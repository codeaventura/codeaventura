// ENTRADA CINEMATOGRÁFICA
gsap.from(".titulo", {
  y: 100,
  opacity: 0,
  duration: 1.5
});

gsap.from(".desc", {
  opacity: 0,
  delay: 0.5,
  duration: 1.5
});

gsap.fromTo(".btn-descarga", 
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, delay: 1, duration: 0.8 }
);

gsap.from("#personajes", {
  x: 200,
  opacity: 0,
  duration: 1.5
});

// PARALLAX CON MOUSE
document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 30;
  let y = (window.innerHeight / 2 - e.pageY) / 30;

  gsap.to("#personajes", {
    x: x,
    y: y,
    duration: 0.5
  });
});


