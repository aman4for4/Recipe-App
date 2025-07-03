// Import necessary modules
import { fetchRecipes } from './fetchRecipes.js';
import { fetchIngredients } from './fetchIngredients.js';
import { openRecipePopup } from './popup.js';
import { saveToRecentlyViewed, displayRecentlyViewed } from './recentlyViewed.js';
import { updateOnlineStatus } from './offlineStatus.js';
import { renderFavourites, addToFavourites } from './favourites.js';
import { goToHome } from './goToHome.js';
import { toggleDarkMode } from './darkMode.js';

document.addEventListener('DOMContentLoaded', () => {

// Elements for interaction
const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');
const toggleBtn = document.querySelector('.dark-mode-toggle');
const homeBtn = document.getElementById("homeBtn");

// Fetch Recipes when search is clicked
searchBtn.addEventListener('click', (e) => {
  e.preventDefault(); //pahe refresh nhi hoga
  const searchInput = searchBox.value.trim();
  console.log("Searching for:", searchInput);
  if (!searchInput) {
    recipeContainer.innerHTML = `<h2>Type your recipe in search box</h2>`;
    return;
  }
  fetchRecipes(searchInput);
});

// Close recipe popup
recipeCloseBtn.addEventListener('click', () => {
  recipeDetailsContent.parentElement.style.display = "none"; // Hide the popup
});

// Dark Mode Toggle
toggleBtn.addEventListener('click', toggleDarkMode);

// Offline status handling
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();  // Run on load

// Display recently viewed recipes on page load
window.addEventListener('load', () => {
  displayRecentlyViewed();
});

// Render favourites when page loads
window.addEventListener('DOMContentLoaded', renderFavourites);

// To go back to home page

homeBtn.addEventListener('click', goToHome);
});