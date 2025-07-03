import { openRecipePopup } from './popup.js';
import { addToFavourites } from './favourites.js';

const recipeContainer = document.querySelector('.recipe-container');

export const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";
    try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await data.json();
        recipeContainer.innerHTML = "";

        if (!response.meals) {
            recipeContainer.innerHTML = "<h2>No recipes found!</h2>";
            return;
        }

        response.meals.forEach(meal => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p><span>${meal.strArea}</span> Dish</p>
                <p>Belongs to <span>${meal.strCategory}</span> Category</p>
            `;
            
            //view recipe button
            const button = document.createElement('button');
            button.textContent = "View Recipe";
           recipeDiv.appendChild(button);
              
           //adding event listner 
           button.addEventListener('click', () => {
            openRecipePopup(meal);
        });

        //add to favourites button
            const favButton = document.createElement('button');
            favButton.textContent = "❤️ Add to Favourites";
            favButton.classList.add('favourite-btn');
            favButton.addEventListener('click', () => {
                addToFavourites(meal);
            });
            recipeDiv.appendChild(favButton);

            recipeContainer.appendChild(recipeDiv);
        });
    } 
    catch (error) {
        recipeContainer.innerHTML = "<h2>Error in fetching recipes..</h2>";
    }
};
