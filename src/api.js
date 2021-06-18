// Base URL
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

// Meal by category
const mealsByCategoryURL = (category) => `${baseUrl}filter.php?c=${category}`;
// Meal by id
const mealsByIdURL = (category) => `${baseUrl}lookup.php?i=${category}`;

export { mealsByCategoryURL, mealsByIdURL };
