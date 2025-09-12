import { useEffect, useState } from "react";
import { getRecipes } from "../../services/api";
import RecipeCard from "../../components/RecipeCard/RecipeCard.jsx";
import './Home.css'
import Navbar from "../../components/Navbar/Navbar.jsx";

function Home() {
    const [recipes, setRecipes] = useState([]);
      
      useEffect(() => {
        async function fetchData() {
          try {
            const data = await getRecipes();
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

    return (
    <div className="body" >
      <Navbar/>
      {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipes={recipe}/>
      ))}
    </div>
    )
}
export default Home;