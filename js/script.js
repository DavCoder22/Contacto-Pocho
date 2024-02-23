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
    var nameIndex = 2;
    var nameDirection = 1;

    setInterval(function () {
        if (nameIndex > nameArray.length) {
            nameDirection = -1;
            nameIndex--; // Evita borrar el segundo car�cter
        } else if (nameIndex < 2) { // Detente en el segundo car�cter
            nameDirection = 1;
            nameIndex = 2; // Comienza a llenar desde el segundo car�cter
        }
        $('#name').text(nameArray.slice(0, nameIndex).join(''));
        nameIndex += nameDirection;
    }, 85);
});
