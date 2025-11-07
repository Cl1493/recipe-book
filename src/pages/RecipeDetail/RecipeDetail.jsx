import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getRecipesById } from "../../services/api";
import './RecipeDetail.css';
import { capitalizeFirstLetter, formatCost } from "../../utils/utils";

export const RecipeDetail = () => {
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
    async function fetchData() {
        try {
            const data = await getRecipesById(Number(recipeId));
            setRecipe(data);
            console.log("Recipe alone:", data)
        } catch (error) {
            console.log(error);
        }
        }
        fetchData();
    }, [recipeId]);

    return(
         <>
        <Navbar/>
       {!recipe ? (
            <p>Receta no encontrada</p>
        ) : ( 
            <div className="recipe-detail-container">
            <div className="recipe-title">
                 <h1>{capitalizeFirstLetter(recipe.title)}</h1>
            </div>
            <div className="recipe-container">
                <div className="recipe-info">
                    <p>Categorías: {recipe.category.join(", ")}</p>
                    <p>Tiempo de preparación: {recipe.prepTime}</p>
                    <p>Tiempo de cocinado: {recipe.cookTime}</p>
                    <p>Coste: {formatCost(recipe.cost) }</p>
                    <p>Nº de raciones: {recipe.rations}</p>
                    <p>Ingredientes:</p>
                    <ul>
                        {recipe.ingredients.map((ingre, index) => (
                            <li key={index}>{capitalizeFirstLetter(ingre.ingredient)} - {ingre.quantity} {ingre.measure}</li>
                        ))}  
                    </ul>
                </div>
               
                <div className="recipe-image-description">
                    <div className="recipe-image-div">
                        <img className="recipe-image" src={recipe.image}/>
                    </div>
                
                    <div className="recipe-description">
                        <p>{recipe.description}</p>
                    </div>
               </div>
               </div>
            <div className="recipe-instructions">
                <p>Instrucciones:</p>
                <ol>
                    {recipe.instructions.map((step, index) => (
                        <li key={index}>{capitalizeFirstLetter(step)}</li>
                    ))}  
                </ol>
            </div>
           </div>
       )}
       
        </>
    );
}

export default RecipeDetail;