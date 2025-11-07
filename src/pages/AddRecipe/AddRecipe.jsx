import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getRecipesById } from "../../services/api";
import './AddRecipe.css';
import { capitalizeFirstLetter, formatCost } from "../../utils/utils";

export const AddRecipe = () => {

    return(
         <>
        <Navbar/>
            <div className="recipe-title">
                    <p>Título:</p>
                <input type="text" placeholder="Título"/>
            </div>
            <div className="recipe-container">
                <div className="recipe-info">
                         <p>Categorías:</p>
                    <input type="text" placeholder="Categorías"/>
                       <p>Tiempo de preparación:</p>
                     <input
        type="number"
        min="0"
        max="23"
       
      />
      :
      <input
        type="number"
        min="0"
        max="59"
       
      />
                 
                      <p>Tiempo de cocinado:</p>
                     <input
        type="number"
        min="0"
        max="23"
      
      />
      :
      <input
        type="number"
        min="0"
        max="59"
     
      />
                  

                      <p>Coste:</p>
                      <label>€:
      <input 
        type="checkbox" 
        name="€" 
      />
      </label>
      <label>€€:
      <input 
        type="checkbox" 
        name="€€" 
      />
      </label>
      <label>€€€:
      <input 
        type="checkbox" 
        name="€€€" 
      />
      </label>
                    <p>Nº de raciones:</p>
                        <input type="number" placeholder="Número de raciones"/>
                    <p>Ingredientes:</p>
                    <ul>
                        <li> 
                            <input type="text" placeholder="Nombre ingrediente"/> 
                           <input type="number" placeholder="Cantidad"/> 
                           <select>
                            <option>Unidad de medida</option>
                            <option>Cucharada</option>
                           </select>
                        </li>
                    </ul>
                </div>
               
                <div className="recipe-image-description">
                    <div className="recipe-image-div">
                        <input type="file" placeholder="Imagen"/>
                    </div>
                
                    <div className="recipe-description">
                         <p>Descripción:</p>
                        <textarea type="text" placeholder="Descripción"/>
                    </div>
               </div>
               </div>
            <div className="recipe-instructions">
                <p>Instrucciones:</p>
                <ul>
                    <li><input type="text" placeholder="Paso a seguir"/></li>
                </ul>
            </div>
        </>
    );
}

export default AddRecipe;