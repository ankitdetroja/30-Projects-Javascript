import presentDrinks from "./js/presentDrinks.js";
import "./js/searchForm.js";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
    presentDrinks(URL);
});