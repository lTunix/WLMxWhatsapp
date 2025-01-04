document.addEventListener("DOMContentLoaded", function() {

    //Placeholder logic
    
    const headerPlaceholder = document.getElementById("header-placeholder");
    headerPlaceholder.classList.add("header");

    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;

            if (headerPlaceholder.classList.contains('support-page')) {

                headerPlaceholder.style.setProperty('background', 'rgba(0, 0, 0, 0.3)');
                headerPlaceholder.style.setProperty('border-bottom', '1px solid rgba(255, 255, 255, 0.3)');

                const menuLinks = headerPlaceholder.querySelectorAll('.menu a');

                menuLinks.forEach(link => {
                    link.addEventListener('mouseover', function() {
                        link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    });

                    link.addEventListener('mouseout', function() {
                        link.style.backgroundColor = '';
                    });
                });
            } else if (headerPlaceholder.classList.contains('download-page')) {

                headerPlaceholder.style.setProperty('background', 'rgba(0, 153, 255, 0.73)');
            }
        })
        .catch(error => console.error('Error al cargar el header:', error));

    const footerPlaceholder = document.getElementById("footer-placeholder");
    footerPlaceholder.classList.add("footer");

    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            footerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el footer:', error));

    //Homepage Modal logic
    
    const modal = document.getElementById("infoModal");
    const infoBtn = document.getElementById("info");
    const closeBtn = document.getElementById("closeBtn");
    
    if (modal && infoBtn && closeBtn) {
        infoBtn.addEventListener("click", () => {
            modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

    //Support-page buttons logic

    const colapseBtn = document.getElementById('colapseBtn');
    const supportBox = document.querySelector('.supportBox');
    const supportButtons = document.querySelectorAll('.supportBtn');

    if (colapseBtn && supportBox) {
        colapseBtn.addEventListener('click', () => {
            if (supportBox.style.display === 'none' || supportBox.style.display === '') {
                supportBox.style.display = 'block';
                colapseBtn.textContent = 'Ocultar FAQ';
            } else {
                supportBox.style.display = 'none';
                colapseBtn.textContent = 'Mostrar FAQ';
            }
        });
    }

    if (supportButtons.length > 0) {
        supportButtons.forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });
    }

});

