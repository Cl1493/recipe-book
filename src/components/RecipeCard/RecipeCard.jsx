import './RecipeCard.css';
import { capitalizeFirstLetter, cutArray, cutTitle, formatCost } from "../../utils/utils";


function RecipeCard({recipes}) {
    return (
        <div className="card">
            <div className='image-space'>
            <img
            className='image'
            src={recipes.image}
            />
            </div>
            <div className="card-footer">
            <h1 className="title">{cutTitle(capitalizeFirstLetter(recipes.title))}</h1>
            <div className='info-card'>
              <div className="first-column">
                <p className="category">Categorías: {cutArray(capitalizeFirstLetter(recipes.category))}</p>
                <p className="cooktime">Preparación: {recipes.prepTime}</p>
                </div>
                <div className="second-column">
                <p className="cost">Coste: {formatCost(recipes.cost)}</p>
                <p className="plates">Raciones: {recipes.rations}</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default RecipeCard;