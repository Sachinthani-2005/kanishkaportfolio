// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Gallery modal opener
window.openImg = function (src, alt) {
  document.getElementById("modalImg").src = src;
  document.getElementById("modalImg").alt = alt;
  document.getElementById("imgTitle").textContent = alt;
};

// Contact form (demo)
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const alertBox = document.getElementById("formAlert");
  alertBox.classList.remove("d-none");

  document.getElementById("cName").value = "";
  document.getElementById("cEmail").value = "";
  document.getElementById("cMsg").value = "";

  setTimeout(() => alertBox.classList.add("d-none"), 3000);
});

// Theme Toggle (Bootstrap 5.3 data-bs-theme)
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);

  if (theme === "light") {
    themeIcon.className = "bi bi-sun";
    themeText.textContent = "Light";
  } else {
    themeIcon.className = "bi bi-moon-stars";
    themeText.textContent = "Dark";
  }
}

// Load saved theme
const saved = localStorage.getItem("theme");
setTheme(saved ? saved : "dark");

// Toggle click
themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-bs-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});