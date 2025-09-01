document.addEventListener('DOMContentLoaded'),function() {
    console.log('Potafolio cragado correctamente');

    //Agregar mensaje de bienvenida
    const header = document.querySelector('header');
    const mensaje = Document.createElement ('p');
    mensaje.textContent = '!Bienbenidos a mi portafolio digital';
    mensaje.style.fontSize = '1.2rem';
    mensaje.style.marginTop = '1rem';
    header.appendChild(mensaje);
});