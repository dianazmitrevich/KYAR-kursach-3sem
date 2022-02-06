/*function include(url) {
   var script = document.createElement('script');
   script.src = url;
   document.getElementsByTagName('head')[0].appendChild(script);
}

include("/assets/js/map.js");
include("/assets/js/sendEmail.js");*/

window.onload = function () {
   const showMapButton = document.querySelector('.map-block__button');
   const map = document.querySelector('.map');

   showMapButton.addEventListener("click", function (e) {
      if (showMapButton.innerHTML == "наша лавка") {
         map.style.cssText = `margin-top: -10px;`;
         showMapButton.innerHTML = "скрыть карту";
      }
      else if (showMapButton.innerHTML == "скрыть карту") {
         map.style.cssText = `margin-top: -100%;`;
         showMapButton.innerHTML = "наша лавка";
      }
   });

   // --------------------------------------

   const emailButton = document.querySelector('.email-block__button');
   const emailInfo = form.email;

   emailButton.addEventListener("click", function (e) {
      emailButton.innerHTML = "отправлено!";
   });

   // --------------------------------------

   const tabFish = document.querySelector('.tab__f');
   const tabPasta = document.querySelector('.tab__p');
   const tabDesert = document.querySelector('.tab__d');
   const tabFruit = document.querySelector('.tab__fr');

   const card = document.querySelectorAll('.second-screen__cards');

   tabFish.addEventListener("click", function (e) {
      tabFish.classList.add("tab-active");
      tabPasta.classList.remove("tab-active");
      tabDesert.classList.remove("tab-active");
      tabFruit.classList.remove("tab-active");

      card[0].classList.remove("cards__fish");
      card[1].classList.add("cards__pasta");
      card[2].classList.add("cards__desert");
      card[3].classList.add("cards__fruit");
   });

   tabPasta.addEventListener("click", function (e) {
      tabFish.classList.remove("tab-active");
      tabPasta.classList.add("tab-active");
      tabDesert.classList.remove("tab-active");
      tabFruit.classList.remove("tab-active");

      card[0].classList.add("cards__fish");
      card[1].classList.remove("cards__pasta");
      card[2].classList.add("cards__desert");
      card[3].classList.add("cards__fruit");
   });

   tabDesert.addEventListener("click", function (e) {
      tabFish.classList.remove("tab-active");
      tabPasta.classList.remove("tab-active");
      tabDesert.classList.add("tab-active");
      tabFruit.classList.remove("tab-active");

      card[0].classList.add("cards__fish");
      card[1].classList.add("cards__pasta");
      card[2].classList.remove("cards__desert");
      card[3].classList.add("cards__fruit");
   });

   tabFruit.addEventListener("click", function (e) {
      tabFish.classList.remove("tab-active");
      tabPasta.classList.remove("tab-active");
      tabDesert.classList.remove("tab-active");
      tabFruit.classList.add("tab-active");

      card[0].classList.add("cards__fish");
      card[1].classList.add("cards__pasta");
      card[2].classList.add("cards__desert");
      card[3].classList.remove("cards__fruit");
   });

   // --------------------------------------

   var fish = ['Лосось', 'Минтай', 'Семга', 'Тунец', 'Бузара «Порто»', 'Судак в соусе'];
   var pasta = ['«Mertat»', 'Зити тальяти', 'Паста «Порто»', 'Цветная паста'];
   var desert = ['Матча торт', 'Клафути', 'Блинчики «По»', 'Вега-маффины'];
   var fruit = ['Гранат'];

   var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.';
   var imgSrcFish = ['/assets/images/card_1.png', '/assets/images/card_2.png', '/assets/images/card_3.png', '/assets/images/card_4.png', '/assets/images/card_5.jpg', '/assets/images/card_6.jpg'];
   var imgSrcPasta = ['/assets/images/card_9.png', '/assets/images/card_10.png', '/assets/images/card_7.jpg', '/assets/images/card_8.jpg'];
   var imgSrcDesert = ['/assets/images/card_11.png', '/assets/images/card_12.png', '/assets/images/card_13.jpg', '/assets/images/card_14.jpg'];
   var imgSrcFruit = ['/assets/images/card_15.png'];
   //var sizes = ['250г', '0.5 кг', '1 кг'];

   const img = document.querySelector('.card__info__img');
   const name = document.querySelector('.text__name');
   const desc = document.querySelector('.text__desc');

   const container = document.querySelectorAll('.second-screen__cards');
   const cardInfo = document.querySelector('.card__info');
   const clcoseButton = document.querySelector('.card__info-close');

   clcoseButton.onclick = function () {
      container[0].classList.remove("cards-not-active");
      container[1].classList.remove("cards-not-active");
      container[2].classList.remove("cards-not-active");
      container[3].classList.remove("cards-not-active");
      cardInfo.classList.add("info-not-active");
   }

   card0.onclick = function () {
      container[0].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcFish[0];
      name.innerHTML = fish[0];
   };

   card1.onclick = function () {
      container[0].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcFish[1];
      img.style.cssText = `transform: rotate(-30deg); margin-left: -60px; margin-top: 50px;`;
      name.innerHTML = fish[1];
   };

   card2.onclick = function () {
      container[0].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcFish[2];
      img.style.cssText = `transform: rotate(-30deg); margin-left: -60px; margin-top: 50px;`;
      name.innerHTML = fish[2];
   };

   card3.onclick = function () {
      container[0].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcFish[3];
      img.style.cssText = `margin-left: -90px; margin-top: -60px;`;
      name.innerHTML = fish[3];
   };

   card4.onclick = function () {
      container[0].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcFish[4];
      img.style.cssText = `transform: rotate(0); margin-left: -140px; margin-top: 0; height: 100%;`;
      name.innerHTML = fish[4];
   };

   card5.onclick = function () {
      container[0].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcFish[5];
      img.style.cssText = `transform: rotate(0); margin-left: -140px; margin-top: 0; height: 100%;`;
      name.innerHTML = fish[5];
   };

   card7.onclick = function () {
      container[1].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcPasta[2];
      img.style.cssText = `transform: rotate(0); margin-left: -140px; margin-top: 0; height: 100%;`;
      name.innerHTML = pasta[2];
   };

   card8.onclick = function () {
      container[1].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcPasta[3];
      img.style.cssText = `transform: rotate(0); margin-left: -140px; margin-top: 0; height: 100%;`;
      name.innerHTML = pasta[3];
   };

   card9.onclick = function () {
      container[1].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcPasta[0];
      img.style.cssText = `transform: rotate(0); margin-left: -140px; margin-top: 0; height: 100%;`;
      name.innerHTML = pasta[0];
   };

   card10.onclick = function () {
      container[1].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcPasta[1];
      img.style.cssText = `width: 80%; transform: rotate(0); margin-left: 10px; margin-top: 0;`;
      name.innerHTML = pasta[1];
   };

   card11.onclick = function () {
      container[2].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcDesert[0];
      img.style.cssText = `margin-left: -120px; margin-top: -10px;`;
      name.innerHTML = desert[0];
   };

   card12.onclick = function () {
      container[2].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcDesert[1];
      img.style.cssText = `transform: rotate(-60deg); margin-left: -100px; margin-top: 60px;`;
      name.innerHTML = desert[1];
   };

   card13.onclick = function () {
      container[2].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcDesert[2];
      img.style.cssText = `transform: rotate(0); margin-left: -140px; margin-top: 0; height: 100%;`;
      name.innerHTML = desert[2];
   };

   card14.onclick = function () {
      container[2].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcDesert[3];
      img.style.cssText = `transform: rotate(0); margin-left: -140px; margin-top: 0; height: 100%;`;
      name.innerHTML = desert[3];
   };

   card15.onclick = function () {
      container[3].classList.add("cards-not-active");
      cardInfo.classList.remove("info-not-active");

      img.src = imgSrcFruit[0];
      img.style.cssText = `transform: rotate(0); margin-left: -140px; margin-top: 0; height: 100%;`;
      name.innerHTML = fruit[0];
   };
}