// script.js
const heartIcons = document.querySelectorAll('.heart');

heartIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.textContent = icon.textContent === '♡' ? '♥' : '♡'; // Toggle heart
  });
});

// Add more JavaScript for booking, "see all", etc. as needed.