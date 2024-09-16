function learnMore() {
    alert("Learn more about our services!");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});