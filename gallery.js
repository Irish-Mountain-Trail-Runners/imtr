document.addEventListener('DOMContentLoaded', function () {

    const galleryContainer = document.getElementById('gallery-container');

    galleries.forEach(gallery => {

        // Gallery section
        const section = document.createElement("div");
        section.className = "gallery-section";

        // Header
        const header = document.createElement("div");
        header.className = "gallery-header";

        header.innerHTML = `
            <span class="gallery-arrow">▶</span>
            <h2>${gallery.title}</h2>
        `;

        section.appendChild(header);

        // Hidden content
        const content = document.createElement("div");
        content.className = "gallery-content";
        content.style.display = "none";

        // Description
        if (gallery.description) {

            const p = document.createElement("p");
            p.className = "gallery-description";
            p.textContent = gallery.description;

            content.appendChild(p);

        }

        // Image Grid
        const grid = document.createElement("div");
        grid.className = "gallery-grid";

        for (let i = 1; i <= gallery.images; i++) {

            const number = String(i).padStart(2, "0");

            const img = document.createElement("img");

            img.src = `images/gallery/${gallery.folder}/${number}.jpg`;
            img.alt = gallery.title;
            img.loading = "lazy";
            img.dataset.full = img.src;

            grid.appendChild(img);

        }

        content.appendChild(grid);
        section.appendChild(content);

        // Expand / Collapse
        header.addEventListener("click", function () {

            const open = content.style.display === "block";

            content.style.display = open ? "none" : "block";

            header.querySelector(".gallery-arrow").textContent =
                open ? "▶" : "▼";

        });

        galleryContainer.appendChild(section);

    });

});