const menuEl = document.querySelector(".menu");
const rotateEl = document.querySelector(".menu .fa-solid");
const paragraphEl = document.querySelector(".paragraph");
const sociallistEl = document.querySelector(".sociallist");
const allsociallistEl = document.querySelectorAll(".sociallist li");

menuEl.addEventListener("click", () => {
  sociallistEl.classList.toggle("hiden");
  rotateEl.classList.toggle("rotate");
});
allsociallistEl.forEach((allsociallistEl) => {
  allsociallistEl.addEventListener("click", () => {
    paragraphEl.innerHTML = allsociallistEl.innerHTML;
    sociallistEl.classList.add("hiden");
  });
});
