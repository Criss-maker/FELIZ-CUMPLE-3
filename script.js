document.getElementById("verMensaje").addEventListener("click", function () {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("mensaje").style.display = "block";
  
  // Reproducir música
  const musica = document.getElementById("musica");
  musica.play();
});
