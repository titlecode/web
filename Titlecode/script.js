document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    const aboutBtn = document.querySelector(".btn[href='#about']");
    const aboutNavLink = document.querySelector("nav a[href='#about']");
    
    // Function to highlight the correct nav link while scrolling
    function updateActiveNav() {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    }

    // Event listener for scrolling to update nav highlight
    window.addEventListener("scroll", updateActiveNav);
    
    // Fix for "About Us" button clicking issue
    if (aboutBtn && aboutNavLink) {
        aboutBtn.addEventListener("click", function () {
            navLinks.forEach(link => link.classList.remove("active"));
            aboutNavLink.classList.add("active");
        });
    }

    // Mobile menu toggle
    const menuIcon = document.getElementById("menu-icon");
    const nav = document.querySelector("nav");

    if (menuIcon && nav) {
        menuIcon.addEventListener("click", function () {
            nav.classList.toggle("active");
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                nav.classList.remove("active");
            });
        });
    }
});