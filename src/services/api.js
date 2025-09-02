export async function getRecipes() {
    const response = await fetch("../../../public/recipes.json");
    return response.json();
}

export async function getRecipesById(id) {
    const response = await fetch("../../../public/recipes.json");
    const data = await response.json();
    return data.find(recipe => recipe.id === id);
}