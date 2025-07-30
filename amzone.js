let hero_sec = document.querySelector(".hero-sec");
let shop_sec = document.querySelector(".shop-sec");
let container = document.querySelector(".container");
let sign_click = document.querySelector(".sign-click");

sign_click.addEventListener("click", function() {
  container.style.display = "flex";  // 👈 show the container as flex
  hero_sec.style.display = "none";
  shop_sec.style.display = "none";
  document.querySelector(".register-container").style.display = "none";
});

document.querySelector(".Register").addEventListener("click" , function() {
   document.querySelector(".register-container").style.display = "initial";
})