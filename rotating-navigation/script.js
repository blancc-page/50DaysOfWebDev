const open = document.getElementById("open");
const close = document.getElementById("close");
const page = document.querySelector(".container");
const circle = document.querySelector(".circle")

open.addEventListener("click", () => {
    page.classList.add("show-nav");
    circle.style.transform = "rotate(-70deg)";
    console.log("SHOW ANV!!")
});
close.addEventListener("click", () => {
    page.classList.remove("show-nav");
    circle.style.transform = "rotate(0)";
    console.log("REMOVE ANV!!")
});