document.addEventListener('DOMContentLoaded', function () {

    const galleryContainer = document.getElementById('gallery-container');

    galleries.forEach(function (gallery) {

        //--------------------------------------------------
        // Gallery Title
        //--------------------------------------------------

        const heading = document.createElement('h2');

        heading.textContent = gallery.title;

        galleryContainer.appendChild(heading);

        //--------------------------------------------------
        // Gallery Description
        //--------------------------------------------------

        const description = document.createElement('p');

        description.className = 'gallery-description';

        description.textContent = gallery.description;

        galleryContainer.appendChild(description);

        //--------------------------------------------------
        // Gallery Grid
        //--------------------------------------------------

        const grid = document.createElement('div');

        grid.className = 'gallery-grid';

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