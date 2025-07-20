// 🌗 DARK MODE TOGGLE
const darkToggleBtn = document.querySelector(".btn-outline-dark");
let isDark = false;

darkToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");

  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.classList.toggle("bg-secondary"));

  isDark = !isDark;
  darkToggleBtn.textContent = isDark ? "Toggle Light Mode" : "Toggle Dark Mode";
});

// 🔄 RESET BUTTON → REDIRECT TO DASHBOARD
const resetBtn = document.querySelector(".btn-outline-danger");

resetBtn.addEventListener("click", () => {
  // You can also clear localStorage here if you're using it
  alert("App reset! Redirecting to dashboard...");
  window.location.href = "index.html"; // redirect
});
