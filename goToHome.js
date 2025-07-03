export const goToHome = () => {
    // Clear recipe details popup if it's open
    document.querySelector('.recipe-details').style.display = 'none';
  
    // Optionally, reset the search box and reload trending or initial recipes
    document.querySelector('.searchBox').value = '';
    recipeContainer.innerHTML = '<h2>Type your recipe in search box</h2>';
  };
  