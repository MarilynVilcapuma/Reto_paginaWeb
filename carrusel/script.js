let currentIndex = 0;

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Ocultar el slide actual
    items[currentIndex].classList.remove('active');

    // Actualizar el índice
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Mostrar el nuevo slide
    items[currentIndex].classList.add('active');

    // Mover el contenedor
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Inicializar el carrusel mostrando el primer elemento
document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0); // Muestra el primer elemento
});
