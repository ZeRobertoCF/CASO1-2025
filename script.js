if (isMobile()) {
    document.querySelectorAll(".ul_links li").forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que el clic cierre inmediatamente

            // Alternar la clase "active" en el elemento clickeado
            this.classList.toggle("active");

            // Cierra otros menús antes de abrir este
            document.querySelectorAll(".ul_links li").forEach(li => {
                if (li !== this) li.classList.remove("active");
            });
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", function () {
        document.querySelectorAll(".ul_links li").forEach(item => {
            item.classList.remove("active");
        });
    });
}
