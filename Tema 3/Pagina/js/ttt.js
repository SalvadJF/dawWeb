function abrirNav() {
    document.getElementById("navegadorLateral").style.width = "250px";
  }
  
function cerrarNav() {
    document.getElementById("navegadorLateral").style.width = "0";
  }

/* Acordeon */

const bloque = document.querySelectorAll('.bloque')
const titulo = document.querySelectorAll('.tituloAco')

// Cuando CLick en titulo
  // Quitar la clase activo de todos los bloque
  // Vamos a añadir la clase activo al bloque con la posicion del titulo

  // Recorrer los titulos
titulo.forEach(( cadaTitulo, i) => {
  // Asigna el evento click
  titulo[i].addEventListener('click', ()=> {
    // Recorre los bloques
    bloque.forEach( (cadaBloque, i)=> {
      // Quita la clase activo de los bloques
      bloque[i].classList.remove('activo')
    })
    // Añade la clase activo al bloque seleccionado
    bloque[i].classList.add('activo')
  })
})

/* LightBox */

// Cuando hacemos click en una imagen pequeña el lightbox cambia a activo
// Y la imgen en grande sera la clickeada

const enlaces = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.grande')
const cerrar = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i ) =>{
  enlaces[i].addEventListener('click', (e)=>{
    e.preventDefault()
    let ruta = cadaEnlace.querySelector('.img').src  

    lightbox.classList.add('activo')
    grande.setAttribute('src', ruta)
  })
})

cerrar.addEventListener('click', ()=>{
  lightbox.classList.remove('activo')
  grande.setAttribute('src', '')
})


/* Carrousel */ 

const puntos = document.querySelectorAll('.punto');
const imagenes = document.querySelector('.ul');

puntos.forEach((cadaPunto, i) => {
  puntos[i].addEventListener('click', () => {
    let posicion = i;
    let operacion = posicion * -50;

    imagenes.style.transform = `translateX(${operacion}%)`;

    puntos.forEach((cadaPunto, j) => {
      puntos[j].classList.remove('activo');
    });
    puntos[i].classList.add('activo');
  });
});

/* Tabs */

const liT = document.querySelectorAll('.liT')
const bloqueT = document.querySelectorAll('.bloqueT')

  liT.forEach((cadaLiT, i) => {
    liT[i].addEventListener('click', () => {
      liT.forEach((cadaLiT, i) => {
        liT[i].classList.remove('activo')
        bloqueT[i].classList.remove('activo')
      })

      liT[i].classList.add('activo')
      bloqueT[i].classList.add('activo')
    })
  })