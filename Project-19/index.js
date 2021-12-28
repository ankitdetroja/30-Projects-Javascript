const searchBtn = document.querySelector('.search-btn');
const meallist = document.querySelector('.meal');
const mealDetailContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

searchBtn.addEventListener('click', getMealList);
meallist.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', function () {
    mealDetailContent.parentElement.classList.remove('showRecipe');
})

async function getMealList() {
    try {
        let serachInputTxt = document.querySelector('input').value.trim();

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${serachInputTxt}`);
        let data = await res.json();

        let html = '';
        if (data.meals) {
            data.meals.forEach(meal => {
                html += `
            <div class="meal-item" data-id="${meal.idMeal}">
            <div class="meal-img">
              <img
                src="${meal.strMealThumb}"
                alt=""
              />
            </div>
            <div class="meal-name">
              <h3>${meal.strMeal}</h3>
              <a href="#" class="recipe-btn">Get Recipe</a>
            </div>
          </div>`;
            })
            meallist.classList.remove('notFound');
        } else {
            html = "Sorry, we didn't find any meal";
            meallist.classList.add('notFound');
        }

        meallist.innerHTML = html;
    } catch (error) {
        console.log(error);
    }
}

async function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.parentElement.parentElement;
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`);
        let data = await res.json();
        mealRecipeModal(data.meals);
    }
}

function mealRecipeModal(meal) {
    meal = meal[0];
    console.log(meal);
    let html = '';
    html += `
    <h2 class="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    <div class="recipe-instruct">
      <h3>Instrcution:</h3>
      <p>
        ${meal.strInstructions}
      </p>
    </div>
    <div class="recipe-meal-img">
      <img
        src="${meal.strMealThumb}"
        alt=""
      />
    </div>
    <div class="recipe-link">
      <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
    </div>
    `;

    mealDetailContent.innerHTML = html;
    mealDetailContent.parentElement.classList.add('showRecipe');
}