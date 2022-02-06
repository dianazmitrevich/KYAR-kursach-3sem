window.onload = function () {
   const emailButton = document.querySelector('.email-block__button');
   const emailInfo = form.email;

   emailButton.addEventListener("click", function (e) {
      emailButton.innerHTML = "отправлено!";
   });
}