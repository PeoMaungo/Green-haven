// mobile-menu.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle function
    function toggleMenu() {
        const navbar = document.getElementById("navbar");
        if (navbar) {
            navbar.classList.toggle("active");
            
            // Change icon based on state
            const menuButton = document.querySelector('.mobile-menu-button');
            if (navbar.classList.contains("active")) {
                menuButton.innerHTML = '✕'; // Close icon
            } else {
                menuButton.innerHTML = '☰'; // Hamburger icon
            }
        }
    }
    
    // Attach event listener to the menu button
    const menuButton = document.querySelector('.mobile-menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking on a link (for mobile)
    document.querySelectorAll('#navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const navbar = document.getElementById("navbar");
                if (navbar) {
                    navbar.classList.remove("active");
                    document.querySelector('.mobile-menu-button').innerHTML = '☰';
                }
            }
        });
    });
});
