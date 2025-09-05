import React, { useEffect, useState } from "react";
import { getRecipes, getRecipesById } from "../../services/api";
import './RecipeCard.css';
import cardImage from '../../../src/assets/bolonesa.jpg';


function RecipeCard() {
    const [recipes, setRecipes] = useState([]);
      
      useEffect(() => {
        async function fetchData() {
          try {
            const data = await getRecipesById([0]);
            setRecipes(data);
            console.log("data: ", data)
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);
    
      useEffect( () => {
         console.log("recipes: ", recipes)
      }
      ), [recipes];

      console.log(cardImage)
    return (
        <div className="card">
            <div className='image-space'>
            <img
            className='image'
            src={cardImage}
           /*  width={100}
            height={80} */
            />
            </div>
            <div className="card-footer">
            <h1 className="title">Título</h1>
            <div className='info-card'>
                <p>Categorías:</p>
                <p>Tiempo de preparación:</p>
                <p>Coste:</p>
                <p>Raciones:</p>
            </div>
            </div>
        </div>
    )
}
export default RecipeCard;