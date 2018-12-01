var texto = document.querySelector(".texto");

texto.addEventListener("focus", function() {
    console.log("Tiene el foco.");
});

texto.addEventListener("blur", function() {
    console.log("No tiene el foco.");
});