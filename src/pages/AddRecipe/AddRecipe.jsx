import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getRecipesById } from "../../services/api";
import "./AddRecipe.css";
import { capitalizeFirstLetter, formatCost } from "../../utils/utils";
import SelectButtonForms from "../../components/SelectButtonForms/SelectButtonForms";

export const AddRecipe = () => {

  const [newIngredient, setNewIngredient] = useState([
  <li key={0}>
    <input type="text" placeholder="Nombre ingrediente" />
    <input type="number" placeholder="Cantidad" />
    <SelectButtonForms />
  </li>]);

  const handleAddIngredient = () => {
    setNewIngredient([...newIngredient, 
    <li key={newIngredient.length}>
      <input type="text" placeholder="Nombre ingrediente" />
      <input type="number" placeholder="Cantidad" />
      <SelectButtonForms/>
    </li>]);
  };

  const [newStep,setNewStep] = useState([
    <li key={0}>
      <input type="text" placeholder="Paso a seguir" />
    </li>
  ]);

  const handleAddStep = () => {
    setNewStep([...newStep, 
    <li key={newStep.length}>
      <input type="text" placeholder="Paso a seguir" />
    </li>]);
  };


  return (
    <>
      <Navbar />
      <div className="recipe-detail-container">
        <div className="recipe-title">
          <label>Título: </label>
          <input type="text" placeholder="Título" />
        </div>
        <div className="recipe-container">
          <div className="recipe-info">
            <label>Categorías: </label>
            <input type="text" placeholder="Categorías" />
            <label>Tiempo de preparación: </label>
            <input type="number" min="0" max="23" />
            :
            <input type="number" min="0" max="59" />
            <label>Tiempo de cocinado: </label>
            <input type="number" min="0" max="23" />
            :
            <input type="number" min="0" max="59" />
            <label>Coste: </label>
            <label>
              €: 
              <input type="checkbox" name="€" />
            </label>
            <label>
              €€: 
              <input type="checkbox" name="€€" />
            </label>
            <label>
              €€€: 
              <input type="checkbox" name="€€€" />
            </label>
            <label>Nº de raciones: </label>
            <input type="number" placeholder="Número de raciones" />
            <label>Ingredientes: </label>
            <ul>
              {newIngredient}
            </ul>
            <button className="add-ingredient-button" onClick={handleAddIngredient}>+ Añadir ingrediente</button>
          </div>

          <div className="recipe-image-description">
            <div className="recipe-image-div">
              <label>Imagen: </label>
              <input type="file" placeholder="Imagen" />
            </div>

            <div className="recipe-description">
              <label>Descripción: </label>
              <textarea type="text" placeholder="Descripción" />
            </div>
          </div>
        </div>
        <div className="recipe-instructions">
          <label>Instrucciones: </label>
          <ol>
            {newStep}
          </ol>
          <button className="add-step-button" onClick={handleAddStep}>+ Añadir paso</button>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
