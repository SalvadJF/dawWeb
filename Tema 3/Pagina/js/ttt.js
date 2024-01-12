function abrirNav() {
    document.getElementById("navegadorLateral").style.width = "250px";
  }
  
function cerrarNav() {
    document.getElementById("navegadorLateral").style.width = "0";
  }

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