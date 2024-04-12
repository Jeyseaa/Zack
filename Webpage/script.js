document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    // Hide all sections except the first one
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.classList.add("hidden");
        }
    });

    // Smooth scroll to section when clicking on navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            sections.forEach(section => {
                section.classList.add("hidden");
            });

            // Show target section
            targetSection.classList.remove("hidden");

            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Handle "About Me" button
    const aboutMeBtn = document.querySelector(".about__me");
    aboutMeBtn.addEventListener("click", function () {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });

    // Handle "Back to Home" button
    const backHomeBtn = document.querySelector(".back__home");
    backHomeBtn.addEventListener("click", function () {
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    });

    // Handle form submission for Contact section
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Add your form submission logic here
        alert("Form submitted successfully!"); // For demonstration purposes
        this.reset(); // Reset the form
    });

    // Additional logic for other sections can be added here
});
