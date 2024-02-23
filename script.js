// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Adiciona a classe 'scroll' ao cabeçalho quando a página é rolada
    document.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("scroll", window.scrollY > 0);
    });

    // Adiciona o ano atual ao elemento com o ID 'current-year'
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
});
