const container = document.getElementById('container');
const colors = ["#2B2E4A", "#E84545", "#53354A"," #903749", "#FFFFD2", "#FCBAD3", "#AA96DA", "#A8D8EA", "#71C9CE", "#E3FDFD", "#F38181", "#FCE38A", "#EAFFD0"," #F9ED69"," #F08A5D", "#B83B5E", "#6A2C70"];

const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        setColor(square);
    });

    square.addEventListener("mouseout", () => {
        removeColor(square);
    });

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColour();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
}

function getRandomColour() {
    return colors[Math.floor(Math.random() * colors.length)];
}