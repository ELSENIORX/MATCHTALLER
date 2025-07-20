document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Muestra la primera imagen al cargar
    showImage(currentIndex);

    // Cambia de imagen cada 5 segundos (5000 ms)
    setInterval(nextImage, 5000); 
});