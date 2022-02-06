window.onload = function () {
   var sub = form.email.value;

   var subArray;
   subArray += sub;

   const element = document.querySelector('.show-subs');
   const button = document.querySelector('.button');

   showSubs() = e => {
      element.innerHTML += subArray;
   };

   buttob.addEventListener("click", function (e) {
      showSubs();
   });
}