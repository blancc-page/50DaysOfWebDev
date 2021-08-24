const playStation = document.querySelector(".left");
const xBox = document.querySelector(".right");
const container = document.querySelector(".container");

playStation.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});
playStation.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});
xBox.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});
xBox.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});