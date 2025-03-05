document.addEventListener("DOMContentLoaded", function () {
    const logos = document.querySelector(".logos");
    const clone = logos.innerHTML;
    logos.innerHTML += clone; // Duplica los logos para que la animación sea fluida
});
