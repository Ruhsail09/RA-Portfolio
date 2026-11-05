// Select the theme toggle button
const themeButton = document.getElementById("theme");

// Load previously saved theme
const savedTheme = localStorage.getItem("ra-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

// Update theme button icon
themeButton.textContent =
    document.body.classList.contains("light") ? "☾" : "☼";

// Toggle between light and dark mode
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const mode = document.body.classList.contains("light")
        ? "light"
        : "dark";

    // Save selected theme
    localStorage.setItem("ra-theme", mode);

    // Update button icon
    themeButton.textContent = mode === "light" ? "☾" : "☼";
});

// Automatically update footer year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Scroll reveal animation
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                // Stop observing after animation
                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.12
    }
);

// Apply animation to all reveal sections
document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});