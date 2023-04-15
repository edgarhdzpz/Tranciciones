const movimiento = document.getElementById("btn");
const text = document.getElementById("container");

movimiento.addEventListener('click', function(){
 var select = document.querySelector('.lista').value;

  switch (select) {
    case "Arriba":
     text.classList.toggle("transitionsN");
      break;
    case "Derecha":
      text.classList.toggle("transitionsE");
      break;
    case "Abajo":
      text.classList.toggle("transitionsS");
      break;
    case "Izquierda":
      text.classList.toggle("transitionsO");
      break;
  }
});

function mymove() {
  text.classList.remove("transitionsN");
  text.classList.remove("transitionsE");
  text.classList.remove("transitionsS");
  text.classList.remove("transitionsO");
}