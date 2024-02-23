// JavaScript
$(document).ready(function () {
    $('#card').click(function () {
        $('#body').toggleClass('d-none'); // Alterna la clase d-none para mostrar u ocultar el cuerpo al hacer clic
    });

    $('.contact-info p').hover(function () {
        $(this).toggleClass('bg-light text-success'); // Alterna las clases de fondo y color de texto al pasar el cursor
    });

    // Efecto de escritura para el nombre
    var name = $('#name').text();
    var nameArray = name.split('');
    var nameIndex = 0;
    var nameDirection = 1;

    setInterval(function () {
        if (nameIndex >= nameArray.length || nameIndex < 0) {
            nameDirection *= 1;
        }
        $('#name').text(nameArray.slice(0, nameIndex).join(''));
        nameIndex += nameDirection;
    }, 85);
});
