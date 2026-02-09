const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
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
 // Make the "No" button run away
 const x = Math.random() * 240 - 120;
 const y = Math.random() * 200 - 100;
 noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
noBtn.addEventListener("click", () => {
 noCount++;
 message.textContent =
   noMessages[Math.min(noCount - 1, noMessages.length - 1)];
 // Make YES button grow each time she says no
 const scale = 1 + noCount * 0.15;
 yesBtn.style.transform = `scale(${scale})`;
 // After too many tries, disable No button 😄
 if (noCount >= 7) {
   noBtn.disabled = true;
   noBtn.style.opacity = 0.5;
   noBtn.style.cursor = "not-allowed";
   message.textContent = "Махнахме бутона за отказ, защото нямаш право на глас!";
 }
});
yesBtn.addEventListener("click", () => {
 message.textContent = "Събота - Fake French, аз и ти ";
 document.querySelector("h1").textContent = "💞 Каза ДА! 💞";
 noBtn.style.display = "none";
 yesBtn.textContent = "Обичам те!";
});