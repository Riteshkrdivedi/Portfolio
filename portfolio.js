// hamburger script
let nav = document.querySelector("nav");
let hammenu = document.querySelector(".ham-menu");
let hamcross = document.querySelector(".ham-cross");
let hamburger = document.querySelector(".hamburger");
let navitemshm = document.querySelectorAll(".nav-items-hm");

console.log("oo");

hammenu.addEventListener("click", () => {
  hamburger.style.display = "block";
  nav.style.display = "none";
  //   console.log("menu work");
});

hamcross.addEventListener("click", () => {
  hamburger.style.display = "none";
  nav.style.display = "flex";
  //   console.log("cross work");
});

navitemshm.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.style.display = "none";
    nav.style.display = "flex";
    console.log("nav cross work");
  });
});
