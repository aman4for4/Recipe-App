const favouritesContainer = document.querySelector('.favourites-container');
let favourites = JSON.parse(localStorage.getItem('favourites')) || [];



export const addToFavourites = (meal, favourites) => {
  if (favourites.some(fav => fav.idMeal === meal.idMeal)) {
    alert("Already in favourites!");
    return;
  }
  favourites.push(meal);
  localStorage.setItem('favourites', JSON.stringify(favourites));
  renderFavourites(favourites);
};

export const renderFavourites = (favourites) => {
 // const favouritesContainer = document.querySelector('.favourites-container');
  favouritesContainer.innerHTML = "";
  favourites.forEach(meal => {
    const favDiv = document.createElement('div');
    favDiv.classList.add('recipe');
    favDiv.innerHTML = `
      <img src="${meal.strMealThumb}">
      <h3>${meal.strMeal}</h3>
      <p><span>${meal.strArea}</span> Dish</p>
      <p>Belongs to <span>${meal.strCategory}</span> Category</p>
    `;
    const viewBtn = document.createElement('button');
    viewBtn.textContent = "View Recipe";
    viewBtn.addEventListener('click', () => openRecipePopup(meal));
    favDiv.appendChild(viewBtn);

    favouritesContainer.appendChild(favDiv);
  });
};

