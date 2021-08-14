const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var currentActive = 1;

next.addEventListener("click", () => {
    if(currentActive < circles.length){
        currentActive++;
    } else {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener("click", () => {
    if(currentActive < 1){
        currentActive = 1;
    } else {
        currentActive--;
    }
    update();
})

function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
        console.log("This is index:" + index);
        console.log("This is currentActive:" + currentActive);
    } )
    const actives = document.querySelectorAll(".active");

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

    if(currentActive == 1){
        prev.disabled = true;
    } else if(currentActive == circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}