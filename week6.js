// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Counter game
let count = 0;
const countEl = document.getElementById("count");
document.getElementById("increment").onclick = () => {
  count++; countEl.textContent = count;
};
document.getElementById("decrement").onclick = () => {
  if (count > 0) count--; countEl.textContent = count;
};

// Tabs
const tabs = document.querySelectorAll(".tab");
const tabContent = document.getElementById("tabContent");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    tabContent.textContent = `Content for Tab ${tab.dataset.tab}`;
  });
});

// FAQ toggle
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Form validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errors = document.querySelectorAll(".error");

  errors.forEach(err => err.textContent = "");

  if (name.value.trim().length < 3) {
    name.nextElementSibling.textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.nextElementSibling.textContent = "Enter a valid email.";
    valid = false;
  }

  if (password.value.length < 6) {
    password.nextElementSibling.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  document.getElementById("formMessage").textContent = valid ? "✅ Form submitted successfully!" : "❌ Fix the errors above.";
  document.getElementById("formMessage").style.color = valid ? "green" : "red";
});
