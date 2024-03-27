window.addEventListener('DOMContentLoaded', (event) => {
    var nombre = prompt("Por favor, introduce tu nombre en minúsculas:");
    var mensaje = document.getElementById('mensaje');
  
    if (nombre === "mimi" || nombre === "nohemi") {
      mensaje.textContent = "Entonces ta emo y muccio";
    } else {
      mensaje.textContent = "Bonito día, pero no eres la persona que amo";
    }
  });