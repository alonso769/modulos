document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('heroCarousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-control.prev');
    const nextBtn = carousel.querySelector('.carousel-control.next');
    const paginationDotsContainer = carousel.querySelector('.carousel-pagination');

    let currentIndex = 0;
    let autoSlideInterval; // Para el deslizamiento automático

    // Función para actualizar la visualización del carrusel
    const updateCarousel = () => {
        carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
        updatePaginationDots();
    };

    // Función para ir al slide anterior
    const goToPrevSlide = () => {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        updateCarousel();
    };

    // Función para ir al siguiente slide
    const goToNextSlide = () => {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    };

    // Generar puntos de paginación
    const createPaginationDots = () => {
        paginationDotsContainer.innerHTML = ''; // Limpiar cualquier dot existente
        carouselItems.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('pagination-dot');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
                resetAutoSlide(); // Reinicia el temporizador al hacer clic en un punto
            });
            paginationDotsContainer.appendChild(dot);
        });
    };

    // Actualizar el estado activo de los puntos de paginación
    const updatePaginationDots = () => {
        const dots = paginationDotsContainer.querySelectorAll('.pagination-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // Iniciar deslizamiento automático
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            goToNextSlide();
        }, 5000); // Cambia de imagen cada 5 segundos (5000 ms)
    };

    // Reiniciar el temporizador de deslizamiento automático
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    // Event Listeners para los botones de navegación
    prevBtn.addEventListener('click', () => {
        goToPrevSlide();
        resetAutoSlide(); // Reinicia el temporizador al hacer clic en la flecha
    });

    nextBtn.addEventListener('click', () => {
        goToNextSlide();
        resetAutoSlide(); // Reinicia el temporizador al hacer clic en la flecha
    });

    // Inicialización al cargar la página
    createPaginationDots();
    updateCarousel(); // Muestra el primer slide al cargar
    startAutoSlide(); // Inicia el deslizamiento automático
});



document.addEventListener('DOMContentLoaded', () => {
    // ... (todo tu código JavaScript existente, como el del carrusel) ...

    // Nuevo código para el menú de hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});