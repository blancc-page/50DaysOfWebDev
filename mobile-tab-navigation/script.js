
const imgs = document.querySelectorAll(".content");
const lists = document.querySelectorAll("li");

console.log(imgs);

lists.forEach((list,idx) => {
    list.addEventListener("click", () => {
        removeActiveClasses();
        removeShowClasses();
        imgs[idx].classList.add("show");
        list.classList.add("active");
    });
});

function removeActiveClasses(){
    lists.forEach((list) => {
        list.classList.remove("active");
    });
}

function removeShowClasses(){
    imgs.forEach((img) => {
        img.classList.remove("show");
    });
}