import { fetchIngredients } from "./fetchIngredients.js";
import { saveToRecentlyViewed } from "./recentlyViewed.js";

const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

export const openRecipePopup = (meal) => {
  saveToRecentlyViewed(meal);

  recipeDetailsContent.innerHTML = `
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3>Ingredients:</h3>   
    <ul class="ingredientList">${fetchIngredients(meal)}</ul>
    <div class="recipeInstructions">
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>  
    </div>
  `;

  recipeDetailsContent.parentElement.style.display = "block";
};

