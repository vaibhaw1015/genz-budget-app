// Spending Logic
// Spending logic
const spentToday = 85;
const spendingBar = document.getElementById("spending-bar");
const feedback = document.getElementById("spending-feedback");

if (spentToday <= 50) {
  spendingBar.classList.replace("bg-danger", "bg-success");
  feedback.textContent = "✅ You’re doing great today!";
  feedback.className = "text-success text-center fw-semibold";
} else if (spentToday <= 75) {
  spendingBar.classList.replace("bg-danger", "bg-warning");
  feedback.textContent = "🧐 Keep an eye on your spending.";
  feedback.className = "text-warning text-center fw-semibold";
} else {
  feedback.textContent = "⚠️ You're close to today's limit!";
}

// Savings logic
const savings = 400;
const savingsFeedback = document.getElementById("savings-feedback");
const savingsBar = document.getElementById("savings-bar");

if (savings >= 1000) {
  savingsFeedback.textContent = "🎉 Goal Complete! Time to pack your bags!";
  savingsFeedback.className = "text-success text-center fw-bold";
} else if (savings >= 500) {
  savingsFeedback.textContent = "👏 Halfway to Tokyo!";
  savingsFeedback.className = "text-info text-center fw-bold";
}

// Claim reward button logic
const claimBtn = document.getElementById("claim-btn");
const rewardMsg = document.getElementById("reward-msg");

claimBtn.addEventListener("click", () => {
  claimBtn.disabled = true;
  claimBtn.textContent = "🎉 Reward Claimed!";
  claimBtn.classList.replace("btn-outline-primary", "btn-success");
  rewardMsg.classList.remove("d-none");
  animateXP();
});

// Animate XP bar
function animateXP() {
  const xpBar = document.querySelector(".progress-bar.bg-primary");
  let width = 60;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      xpBar.style.width = width + "%";
      xpBar.textContent = width + "%";
    }
  }, 30);
}
// Profile card toggle logic
const profileIcon = document.getElementById("profile-icon");
const profileCard = document.getElementById("profile-card");

profileIcon.addEventListener("click", () => {
  profileCard.classList.toggle("d-none");
});