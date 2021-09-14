const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
    "You clicked me.",
    "You clicked again!",
    "You sure like clicking.",
    "You can't stop can you.",
    "Okay, you need help!",
    "Leave me alone!",
    "🙄🙄🙄🙄🙄🙄🙄🙄"
]

var messageIndex = 0;

button.addEventListener("click", () => {
    createNotification();
});



function createNotification(idx){
    const notification = document.createElement("div");
    notification.classList.add("toast");

    notification.innerText = getRandomMessage();
    
    toasts.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3500);
}
function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}
