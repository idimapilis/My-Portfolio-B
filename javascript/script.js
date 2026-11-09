
document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Logic
    const themeBtn = document.getElementById("theme-btn");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    const htmlElement = document.documentElement;

    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme") || "light";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateIcons(savedTheme);

    themeBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateIcons(newTheme);
    });

    function updateIcons(theme) {
        if (theme === "dark") {
            sunIcon.style.display = "none";
            moonIcon.style.display = "block";
        } else {
            sunIcon.style.display = "block";
            moonIcon.style.display = "none";
        }
    }

    // Interactive shape animation on index page
    const shape = document.querySelector(".interactive-shape");
    if (shape) {
        shape.addEventListener("click", () => {
            // Random rotation and scale
            shape.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.9 + Math.random() * 0.3})`;
            
            // Random gradient colors based on orange/yellow theme
            const colors = ['#ff9800', '#ffeb3b', '#ff5722', '#ffc107', '#ff7043', '#fbc02d'];
            const color1 = colors[Math.floor(Math.random() * colors.length)];
            const color2 = colors[Math.floor(Math.random() * colors.length)];
            shape.style.background = `linear-gradient(${Math.random() * 360}deg, ${color1}, ${color2})`;
        });
    }
});
