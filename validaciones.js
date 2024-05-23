var expr = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
$(document).ready(function(){
    $("#registroForm").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var contraseña = $("#contraseña").val();
        var correo = $("#correo").val();
        var genero = $("#genero").val();
        var celular = $("#celular").val();
        var edad = $("#edad").val();

        // Rut: largo entre 9 y 10 caracteres
        if(rut.length < 9 || rut.length > 10){
            alert("El Rut debe tener entre 9 y 10 caracteres.");
            return;
        }

        // Nombre, Apellidos: largo entre 3 y 20 caracteres
        if(nombre.length < 3 || nombre.length > 20 ||
            apellidoPaterno.length < 3 || apellidoPaterno.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }

        // Validacion Correo : Debe contener @
        if(correo == "" || !expr.test(correo)){
            alert("El correo debe estar bien escrito // Intenta colocando un @")
            return;
        }
        // Validacion Correo : Debe tener minimo 6 caracteres
        if(contraseña.length < 6){
            alert("La contraseña debe contener minimo 6 caracteres.");
            return;
        }

        // Edad: Validación de edad (Validacion de longitud de la edad)
        if(edad.length < 1 || edad.length > 3){
            alert("Por favor ingrese una edad entre 18 y 99 años");
            return;
        }

        // Edad: Validación de edad (Mayor de edad)
        if(edad < 18){
            alert("Por favor ingrese una edad mayor o igual a 18");
            return;
        }

        // Género: seleccionado
        if(genero === ""){
            alert("Por favor, seleccione un Género.");
            return;
        }

        // Celular: largo entre 9 y 12 caracteres
        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Registro exitoso!");
        // Redirigir a index.html después de mostrar la alerta
        window.location.href = "index.html";
    });
});
