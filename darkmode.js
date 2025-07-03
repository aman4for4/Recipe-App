export const toggleDarkMode = () => {
    const toggleBtn = document.querySelector('.dark-mode-toggle');
     
    // Ensure the button exists before adding the event listener
  if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  
      // Toggle icon 🌙/☀️
      toggleBtn.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
    });
  };
  document.addEventListener('DOMContentLoaded', () => {
  toggleDarkMode();
});