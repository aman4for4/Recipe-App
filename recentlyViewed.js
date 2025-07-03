import { openRecipePopup } from "./popup.js";

export const saveToRecentlyViewed = (meal) => {
  let recent = JSON.parse(localStorage.getItem("recentRecipes")) || [];

  // Remove duplicates
  recent = recent.filter(r => r.idMeal !== meal.idMeal);

  // Add current at the start
  recent.unshift({
    idMeal: meal.idMeal,
    strMeal: meal.strMeal,
    strMealThumb: meal.strMealThumb
  });

  // Keep only 5 recent
  recent = recent.slice(0, 5);

  localStorage.setItem("recentRecipes", JSON.stringify(recent));
  displayRecentlyViewed();
};

//create recently viewed function
export const displayRecentlyViewed = () => {
  const container = document.getElementById("recentlyViewedRecipes");
  const recent = JSON.parse(localStorage.getItem("recentRecipes")) || [];

  if (recent.length === 0) {
    container.innerHTML = "<p>No recipes viewed recently.</p>";
    return;
  }

  container.innerHTML = ""; //clear previous

  recent.forEach(meal => {
    const div = document.createElement('div');
    div.classList.add('recipe');

    div.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h4>${meal.strMeal}</h4>
    `;

    div.addEventListener('click', async () => {
      //fetch full meal data and show popup
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
      const res = await data.json();
      openRecipePopup(res.meals[0]);
    });

    container.appendChild(div);
  });
};

