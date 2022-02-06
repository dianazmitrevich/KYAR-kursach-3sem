window.onload = function () {
   const showMapButton = document.querySelector('.map-block__button');
   const map = document.querySelector('.map');

   showMapButton.addEventListener("click", function (e) {
      if (showMapButton.innerHTML == "наши лавки") {
         map.style.cssText = `margin-top: -10px;`;
         showMapButton.innerHTML = "скрыть карту";
      }
      else if (showMapButton.innerHTML == "скрыть карту") {
         map.style.cssText = `margin-top: -100%;`;
         showMapButton.innerHTML = "наши лавки";
      }
   });
}