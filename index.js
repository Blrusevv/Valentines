const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const littleMouse = document.getElementById("little-mouse");
let noCount = 0;
const noMessages = [
 "Сигурна?",
 "Айде пак",
 "Мишкееее",
 "Натисни 'Не', ако не ти се ходи в Япония",
 "Ако натиснеш 'Не', ще ти продадем Дайсъна",
 "Задължавам се да целуна Богомил 10.000 пъти",
 "Натисни 'Не', ако не обичаш Пебълс",
];
const moveNoButton = () => {
 const x = Math.random() * 120 - 60;
 const y = -(Math.random() * 100 + 20); // Only move upward (negative Y)
 noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
 moveNoButton();
});
noBtn.addEventListener("click", () => {
 noCount++;
 message.textContent =
   noMessages[Math.min(noCount - 1, noMessages.length - 1)];
 const scale = 1 + noCount * 0.15;
 yesBtn.style.transform = `scale(${scale})`;
 if (noCount >= 8) {
   noBtn.disabled = true;
   noBtn.style.opacity = 0.5;
   noBtn.style.cursor = "not-allowed";
   message.textContent = "Махнахме бутона за отказ, защото нямаш право на глас!";
 }
});
yesBtn.addEventListener("click", () => {
 message.textContent = "Събота, Confetti, аз и ти?";
 message.style.fontSize = '2rem';
 littleMouse.style.display = "none";
 noBtn.style.display = "none";
 yesBtn.textContent = "Обичам те!";
});