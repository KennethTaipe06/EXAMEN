document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');

    fetch('/images')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const img = document.createElement('img');
                img.src = `images/${image}`;
                gallery.appendChild(img);
            });
        })
        .catch(error => console.error('Error al cargar las imágenes:', error));
});
