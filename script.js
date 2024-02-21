// JavaScript
$(document).ready(function () {
    $('#card').click(function () {
        $('#body').slideToggle();
    });

    $('.contact-info p').hover(function () {
        $(this).css('background-color', '#d4edda').css('color', '#155724'); // Cambia el color de fondo y el color del texto al pasar el cursor
    }, function () {
        $(this).css('background-color', 'transparent').css('color', '#007bff'); // Restaura los colores originales al quitar el cursor
    });
});
