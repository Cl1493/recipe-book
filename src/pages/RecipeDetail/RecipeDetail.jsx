import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getRecipesById } from "../../services/api";
import './RecipeDetail.css';

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
            <>
            <div className="recipe-title">
                 <h1>{recipe.title}</h1>
            </div>
            <div className="recipe-container">
                <div className="recipe-info">
                    <p>Categorías: {recipe.category}</p>
                    <p>Tiempo de preparación: {recipe.prepTime}</p>
                    <p>Tiempo de cocinado: {recipe.cookTime}</p>
                    <p>Coste: {recipe.cost}</p>
                    <p>Coste: {recipe.rations}</p>
                    <ul>Ingredientes:
                        {recipe.ingredients.map((ingre, index) => (
                            <li key={index}>{ingre.ingredient} - {ingre.quantity} {ingre.measure}</li>
                        ))}  
                    </ul>
                </div>
               
                <div className="recipe-image-description">
                    <div className="recipe-image">
                        <img src={recipe.image}/>
                    </div>
                
                    <div className="recipe-description">
                        <p>{recipe.description}</p>
                    </div>
               </div>
               </div>
            <div className="recipe-instructions">
                <ul>Instrucciones:
                    {recipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}  
                </ul>
            </div>
           </>
       )}
       
        </>
    );
}

export default RecipeDetail;