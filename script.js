// JavaScript
$(document).ready(function () {
    $('#card').click(function () {
        $('#body').toggleClass('d-none'); // Alterna la clase d-none para mostrar u ocultar el cuerpo al hacer clic
    });

    $('.contact-info p').hover(function () {
        $(this).toggleClass('bg-light text-success'); // Alterna las clases de fondo y color de texto al pasar el cursor
    });
});
