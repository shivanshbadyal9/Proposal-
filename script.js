const message = `Happy Girlfriend Day, My Love!

Today is just another reminder of how lucky I am to have someone as kind, caring, and beautiful as you in my life.

You make my days brighter, my heart happier, and my world more meaningful.

Thank you for your love and for always being there for me.

On this Girlfriend Day, I just want you to know that you are my happiness, my peace, my biggest blessing, and my favorite person.

I love you today, tomorrow, and always.

Forever Yours,

❤️ Shivansh ❤️`;

let i = 0;

function startLove() {

    const music = document.getElementById("bgMusic");
    music.play();

    document.getElementById("intro").style.display = "none";
    document.getElementById("main").style.display = "block";

    typeWriter();
    updateTimer();

    setInterval(createHeart, 300);
}


function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}
function checkPassword(){

    const pass=document.getElementById("password").value;

    if(pass==="2008"){

        document.getElementById("lockScreen").style.display="none";
        document.getElementById("intro").style.display="flex";

    }else{

        document.getElementById("errorMsg").innerHTML="❌ Wrong Password 😢";

    }

}

function updateTimer() {

    const startDate = new Date("2026-04-17T00:00:00");

    setInterval(() => {

        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);

        document.getElementById("loveTimer").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ❤️`;

    }, 1000);
}


function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}


function showEnding() {

    document.getElementById("main").style.display = "none";
    document.getElementById("ending").style.display = "flex";

}
