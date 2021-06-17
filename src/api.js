// Base URL
const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

// Meal Categories
const mealsURL = baseUrl + "categories.php";

// Meal by category
const mealsByCategoryURL = (category) => {
  return baseUrl + `filter.php?c=${category}`;
};

export { mealsURL, mealsByCategoryURL };
