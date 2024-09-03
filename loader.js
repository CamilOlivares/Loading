// loader.js
// Este Script solo se usa si se quiere usar el "Laoding" como pantalla de carga antes de entrar a la pagina deseada, si solo se desea el mensaje con el efecto fijo en algun punto fijo del sitio web, omitir este script


window.addEventListener("load", function() {
  // Mantener el loader visible durante 2 segundos
  setTimeout(function() {
    document.getElementById("loader").style.display = "none"; // Oculta el loader
    document.getElementById("main-content").style.display = "block"; // Muestra el contenido principal
  }, 2000); // 2000 milisegundos = 2 segundos
});
