export async function getRecipes() {
    const url = "../../../recipes.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message);
    }
};

export async function getRecipesById(id) {
    const url = "../../../recipes.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`); 
        }
        const data = await response.json();
        console.log(data);
       const result = data.find((recipe) => recipe.id === id);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message);
    }
};
