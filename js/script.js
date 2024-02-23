// script.js

// Obtener elementos del DOM
const cardBody = document.getElementById('body');
const cardHeader = document.querySelector('.card-header');

// Mostrar/ocultar informaci�n de contacto al hacer clic en el encabezado
cardHeader.addEventListener('click', () => {
    cardBody.classList.toggle('d-none');
});
