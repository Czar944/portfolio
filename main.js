const slideGroups = document.querySelectorAll(".slide-group");
let currentSlide = 0;

function showSlide(index) {
  slideGroups.forEach((group, i) => {
    group.classList.toggle("active", i === index);
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slideGroups.length;
  showSlide(currentSlide);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slideGroups.length) % slideGroups.length;
  showSlide(currentSlide);
});

// Sidebar Toggle Functionality
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const body = document.body;

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  sidebarToggle.classList.toggle("active");
  body.classList.toggle("sidebar-open");
});

// Sidebar Navigation Links
const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
sidebarLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const slideIndex = parseInt(link.getAttribute("data-slide"));
    currentSlide = slideIndex;
    showSlide(currentSlide);
    
    // Close sidebar after navigation
    sidebar.classList.remove("active");
    sidebarToggle.classList.remove("active");
    body.classList.remove("sidebar-open");
  });
});

// Dark Mode Toggle
const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load saved theme preference
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeSwitch.checked = true;
  }
});

