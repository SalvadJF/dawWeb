function abrirNav() {
  document.getElementById("navegadorLateral").style.width = "250px";
}

function cerrarNav() {
  document.getElementById("navegadorLateral").style.width = "0";
}

/* Acordeon */

const bloque = document.querySelectorAll(".bloque");
const titulo = document.querySelectorAll(".tituloAco");

titulo.forEach((cadaTitulo, i) => {
  titulo[i].addEventListener("click", () => {
    bloque.forEach((cadaBloque, i) => {
      bloque[i].classList.remove("activo");
    });

    bloque[i].classList.add("activo");
  });
});

/* LightBox */

const enlaces = document.querySelectorAll(".ul .a");
const lightbox = document.querySelector(".lightbox");
const grande = document.querySelector(".grande");
const cerrar = document.querySelector(".cerrar");

enlaces.forEach((cadaEnlace, i) => {
  enlaces[i].addEventListener("click", (e) => {
    e.preventDefault();
    let ruta = cadaEnlace.querySelector(".img").src;

    lightbox.classList.add("activo");
    grande.setAttribute("src", ruta);
  });
});

cerrar.addEventListener("click", () => {
  lightbox.classList.remove("activo");
  grande.setAttribute("src", "");
});

/* Carrousel */

const puntos = document.querySelectorAll(".punto");
const imagenes = document.querySelector(".ul");

puntos.forEach((cadaPunto, i) => {
  puntos[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * -50;

    imagenes.style.transform = `translateX(${operacion}%)`;

    puntos.forEach((cadaPunto, j) => {
      puntos[j].classList.remove("activo");
    });
    puntos[i].classList.add("activo");
  });
});

/* Tabs */

const liT = document.querySelectorAll(".liT");
const bloqueT = document.querySelectorAll(".bloqueT");

liT.forEach((cadaLiT, i) => {
  liT[i].addEventListener("click", () => {
    liT.forEach((cadaLiT, i) => {
      liT[i].classList.remove("activo");
      bloqueT[i].classList.remove("activo");
    });

    liT[i].classList.add("activo");
    bloqueT[i].classList.add("activo");
  });
});
