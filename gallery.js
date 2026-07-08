document.addEventListener('DOMContentLoaded', function () {

    const galleryContainer = document.getElementById('gallery-container');

    galleries.forEach(function (gallery) {

        // Create gallery title
        const heading = document.createElement('h2');
        heading.textContent = gallery.title;
        galleryContainer.appendChild(heading);

        // Create gallery grid
        const grid = document.createElement('div');
        grid.className = 'gallery-grid';

        // Add images
        for (let i = 1; i <= gallery.images; i++) {

            const img = document.createElement('img');

            const fileName = String(i).padStart(2, '0');

            img.src = `${gallery.folder}/${fileName}.jpg`;

            img.alt = gallery.title;

            grid.appendChild(img);

        }

        galleryContainer.appendChild(grid);

    });

});