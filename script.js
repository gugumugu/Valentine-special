 // ✅ Get name from URL like: index.html?name=nirali
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "CuTie, ";

const questionText = document.getElementById("questionText");
questionText.innerText = `${name} wiLL yOu be my ValenTine?`;

// buttons and UI
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const btnArea = document.getElementById("btnArea");
const successBox = document.getElementById("successBox");

// ✅ Make "No" button run away
function moveNoButton() {
  const areaRect = btnArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const padding = 10;

  const maxX = areaRect.width - btnRect.width - padding;
  const maxY = areaRect.height - btnRect.height - padding;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
}

// On click OR hover, it escapes 😈
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// ✅ On YES
yesBtn.addEventListener("click", () => {
  btnArea.classList.add("hidden");
  successBox.classList.remove("hidden");

  // small celebration hearts burst
  burstHearts();
});

// ✅ Hearts background animation
const heartsBg = document.getElementById("heartsBg");

function createFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerText = Math.random() > 0.5 ? "💗" : "💞";

    const left = Math.random() * 100;
    heart.style.left = `${left}vw`;

    const duration = 4 + Math.random() * 4;
    heart.style.animationDuration = `${duration}s`;

    const size = 14 + Math.random() * 18;
    heart.style.fontSize = `${size}px`;

    heartsBg.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }, 250);
}

// Cute heart burst when YES
function burstHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("span");
    heart.innerText = "💘";
    heart.style.left = `${40 + Math.random() * 20}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 2}s`;
    heart.style.fontSize = `${18 + Math.random() * 12}px`;
    heartsBg.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

createFloatingHearts();
