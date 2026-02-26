function showMessage() {
    alert("Hello! Thanks for visiting my portfolio.");
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}