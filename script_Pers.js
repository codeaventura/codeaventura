const personajes = [
  {
    nombre: "LUNA",
    img: "img/Player1.png"
  },
  {
    nombre: "ALISON",
    img: "img/Player2.png"
  },
  {
    nombre: "DERECK",
    img: "img/Player3.png"
  },
  {
    nombre: "ENEMIGO",
    img: "img/Enemigo.png"
  }
];

let index = 0;

function cambiarPersonaje(direccion) {
  index += direccion;

  if (index < 0) index = personajes.length - 1;
  if (index >= personajes.length) index = 0;

  const img = document.getElementById("personaje");

  // animación salida
  img.style.transform = "scale(0.8)";
  img.style.opacity = "0";

  setTimeout(() => {
    img.src = personajes[index].img;
    document.getElementById("nombrePersonaje").innerText = personajes[index].nombre;

    // animación entrada
    img.style.transform = "scale(1)";
    img.style.opacity = "1";
  }, 200);
}


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


