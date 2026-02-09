const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
let noCount = 0;
const noMessages = [
 "Are you sure? 😳",
 "Think again... 🥺",
 "No is not an option 😌",
 "You clicked the wrong one I think 😭",
 "My heart is cracking... 💔",
 "Okay last chance 😤",
 "No button is acting weird... 😈",
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
 if (noCount >= 6) {
   noBtn.disabled = true;
   noBtn.style.opacity = 0.5;
   noBtn.style.cursor = "not-allowed";
   message.textContent = "No button has been removed for your safety 😇";
 }
});
yesBtn.addEventListener("click", () => {
 message.textContent = "YAAAAAY 💖 I LOVE YOU 😭💘 See you on Valentine’s!";
 document.querySelector("h1").textContent = "💞 SHE SAID YES 💞";
 noBtn.style.display = "none";
 yesBtn.textContent = "Best decision ever 😌💕";
});