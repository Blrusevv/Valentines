const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const littleMouse = document.getElementById("little-mouse");
let noCount = 0;
const noMessages = [
 "Сигурна?",
 "Айде пак",
 "Мишкееее",
 "Натисни, ако не ти се ходи в Япония",
 "Ако натиснеш ще ти продадем Дайсъна",
 "Задължавам се да целуна Богомил 10.000 пъти",
 "Натисни, ако не обичаш Пебълската",
];
noBtn.addEventListener("mouseover", () => {
 const x = Math.random() * 120 - 60;
 const y = Math.random() * 100 - 50;
 noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
noBtn.addEventListener("click", () => {
 noCount++;
 message.textContent =
   noMessages[Math.min(noCount - 1, noMessages.length - 1)];
 const scale = 1 + noCount * 0.15;
 yesBtn.style.transform = `scale(${scale})`;
 if (noCount >= 7) {
   noBtn.disabled = true;
   noBtn.style.opacity = 0.5;
   noBtn.style.cursor = "not-allowed";
   message.textContent = "Махнахме бутона за отказ, защото нямаш право на глас!";
 }
});
yesBtn.addEventListener("click", () => {
 message.textContent = "Събота, 18:00 - Fake French";
 message.style.fontSize = '2rem';
 message.style.marginTop = '1rem';
  document.querySelector("h1").textContent = "Каза ДА! ❤️‍🔥";
 littleMouse.style.display = "none";
 noBtn.style.display = "none";
 yesBtn.textContent = "Обичам те!";
});