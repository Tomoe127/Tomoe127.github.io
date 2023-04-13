// --------------------------------------Modo Dark------------------------------------------

let toggle = document.querySelector(".switch");
let body = document.body;      


toggle.addEventListener("click", function(){
  let val = body.classList.toggle("dark")
  localStorage.setItem("toggle", val)
});

let valor = localStorage.getItem("toggle")

if(valor == "true"){
  body.classList.add("dark")
} else{
  body.classList.remove("dark")
}

//------------------------------------------Carrusel---------------------------------------------

var c = 0;

function carrusel(){
  document.querySelector("#portada").style.opacity = "0";
  document.querySelector("#portada").style.transition = "opacity 0.5s ease";

  setTimeout(cambio, 500);
}

function cambio(){
  c++;
  if(c > 6){
    c = 1;
  }
  document.querySelector("#portada").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(../imagenes/portada${c}.jpg)`;
  document.querySelector("#portada").style.opacity = "1";
  document.querySelector("#portada").style.transition = "opacity 1s ease";

  setTimeout(carrusel, 2000);
}

carrusel();


