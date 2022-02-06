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