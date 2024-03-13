// // alert("Hola este es mi Javascript");
// let nombre="henrry";

// console.log(nombre);

// let titulo= document.querySelector(".acerca-de .parrafo1");
// console.log(titulo);

// let texto_parrafo=titulo.innerText;
// console.log(texto_parrafo);

// let parrafo = document.querySelector(".parrafo2")

// let nombre= "henrry"
// let ciudad="lima"
// let gusto="chocolate"


// function cambiar_texto(nombre,pais,gusto){
//     let contenido =`Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito.
//     Me gusta el ${gusto} y salir a pasear en días de sol.
//     Me encantaría aprender a programar para poder ayudar a las 
//     personas a mostrar lo que hacen.

//     `
//     return contenido
// }
// parrafo.innerText=cambiar_texto(nombre,ciudad,gusto);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector("#menu");
  navBar.classList.toggle("active");
};

const forms = document.getElementById("form");
const nombres = document.getElementById("nombre");
const parrafos = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  alertas.innerHTML = "";

  if (nombres.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafos.innerHTML = warnings;
  } else {
    parrafos.innerHTML = "Enviado";
  }
  return valido;
}

forms.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    forms.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});



