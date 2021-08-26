const sounds = ["what","wasted","bird-up","nani","shutdown","gaaayyyyy","boo","yaay","no-god","right-back"];

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopEffects();
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopEffects() {
    sounds.forEach(sound => {
        const effect = document.getElementById(sound)
        effect.pause();
        effect.currentTime = 0;
    });
}