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
            />
            </div>
            <div className="card-footer">
            <h1 className="title">Título</h1>
            <div className='info-card'>
              <div className="first-column">
                <p className="category">Categorías:</p>
                <p className="cooktime">Preparación:</p>
                </div>
                <div className="second-column">
                <p className="cost">Coste:</p>
                <p className="plates">Raciones:</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default RecipeCard;