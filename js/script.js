// JavaScript
$(document).ready(function () {
    $('#card').click(function () {
        $('#body').toggleClass('d-none'); // Alterna la clase d-none para mostrar u ocultar el cuerpo al hacer clic
    });

    $('.contact-info p').hover(function () {
        $(this).toggleClass('bg-light text-success'); // Alterna las clases de fondo y color de texto al pasar el cursor
    });

    setInterval(function () {
        if (isWaiting) return; // Si est� esperando, no hagas nada

        if (nameIndex > nameArray.length) {
            nameDirection = -1;
            nameIndex--; // Evita borrar el segundo car�cter
            isWaiting = true; // Comienza a esperar
            setTimeout(function () {
                isWaiting = false; // Termina la espera despu�s de 6 segundos
            }, 6000);
        } else if (nameIndex < 2) { // Detente en el segundo car�cter
            nameDirection = 1;
            nameIndex = 2; // Comienza a llenar desde el segundo car�cter
        }
        $('#name').text(nameArray.slice(0, nameIndex).join(''));
        nameIndex += nameDirection;
    }, 85);
});