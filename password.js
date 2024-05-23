$(document).ready(function() {
    $('#eye').on('click', function() {
        var passwordInput = $('#contraseña');
        var passwordFieldType = passwordInput.attr('type');
        
        if (passwordFieldType === 'password') {
            passwordInput.attr('type', 'text');
            $(this).attr('name', 'low-vision'); // Cambia el icono
        } else {
            passwordInput.attr('type', 'password');
            $(this).attr('name', 'show'); // Cambia el icono
        }
    });
});
