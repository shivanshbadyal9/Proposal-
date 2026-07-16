const text =
"Jab se tum meri life me aayi ho, meri duniya aur bhi khoobsurat ho gayi hai. ❤️\n\nBabyyy I Love Uhh 😘💗\n\nTum meri smile ho, meri happiness ho aur meri favourite person ho. 🌹";

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 45);
  }
}

window.onload = typeWriter;

document.getElementById("openBtn").onclick = function () {
  document.querySelector(".container").style.display = "none";
  document.getElementById("proposal").style.display = "block";
};

document.getElementById("yesBtn").onclick = function () {
  alert("💖 Yaaay!! ❤️\nForever Yours,\nShivansh 💍");
};
