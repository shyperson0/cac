form.addEventListener("submit",(event)=>{
    event.preventDefault();

    console.log(mail.value.trim(), typeof(mail.value.trim()));

   //let erroresValidacion = false;

    if (nombre.value.trim().length < 3){
        //erroresValidacion = true;
        alert("El nombre debe contener al menos 3 caracteres");

    }else if (mail.value.trim()==""){
        alert("El email no ha sido proporcionado");
    } else {
        alert("Formulario validado y enviado");
    }
});