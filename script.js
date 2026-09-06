const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");


// ===============================
// NO BUTTON — RUN AWAY 😂
// ===============================

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {

    const moveDistance = 120; // smaller = less movement

    const currentLeft = noBtn.getBoundingClientRect().left;
    const currentTop = noBtn.getBoundingClientRect().top;

    let newX = currentLeft + (Math.random() * moveDistance * 2 - moveDistance);
    let newY = currentTop + (Math.random() * moveDistance * 2 - moveDistance);

    // Keep inside screen
    const padding = 15;

    newX = Math.max(
        padding,
        Math.min(newX, window.innerWidth - noBtn.offsetWidth - padding)
    );

    newY = Math.max(
        padding,
        Math.min(newY, window.innerHeight - noBtn.offsetHeight - padding)
    );

    noBtn.style.position = "fixed";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
}


// ===============================
// YES BUTTON — CELEBRATION ❤️
// ===============================

yesBtn.addEventListener("click", function () {

    document.querySelector("h1").innerHTML = "YAYYYYY! 🎉❤️";

    document.querySelector("h2").innerHTML =
        "SHE SAID YES! 🥹💕";

    document.querySelector(".message").innerHTML =
        "You just made this the happiest moment ever! 💖";

    document.querySelector(".question-box p").innerHTML =
        "OUR STORY BEGINS HERE! 💕🥰";

    noBtn.style.display = "none";

    yesBtn.innerHTML = "I LOVE YOU ❤️";

    celebration();

});


// ===============================
// CELEBRATION 🎉
// ===============================

function celebration() {

    // Confetti
    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }


    // Hearts
    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.className = "celebration-heart";

        heart.innerHTML =
            ["❤️", "💖", "💕", "💗", "💘"]
            [Math.floor(Math.random() * 5)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

}