document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const stored = localStorage.getItem("theme");

if (stored) root.setAttribute("data-theme", stored);

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", current);
  localStorage.setItem("theme", current);
});
