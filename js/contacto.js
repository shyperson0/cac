console.log("Formulario");

const form = document.querySelector(".form");
const nombre = document.querySelector("#name");
const mail = document.querySelector("#mail");

// valido el formulario antes de que se envie

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nombre.value.trim().length < 3) {
    alert("El nombre debe contener al menos 3 caracteres");
  } else if (mail.value.trim() == "") {
    alert("El email no ha sido proporcionado");
  } else if (!mail.value.trim().includes("@")) {
    alert("El email no es válido");
  } else {
    alert("Formulario validado y enviado");
  }
});
