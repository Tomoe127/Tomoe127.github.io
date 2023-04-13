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

