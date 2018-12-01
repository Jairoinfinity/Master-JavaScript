var boton1 = document.querySelector("#boton1");
var caja1 = document.querySelector("#caja1");


boton1.addEventListener("click", function() {
    console.log(alert("Has hecho clivk en el botón."));
});

boton1.addEventListener("mouseover", function() {
    caja1.style.background = "pink";
});

boton1.addEventListener("mouseout", function() {
    caja1.style.background = "aqua";
});