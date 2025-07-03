
//function to fetch ingredients and measurements


export const fetchIngredients = (meal) => {
    let ingredientsList = "";
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient) {
        const measure = meal[`strMeasure${i}`];
        ingredientsList += `<li>${measure} ${ingredient}</li>`;
      } else {
        break;
      }
    }
    return ingredientsList;
  };
  