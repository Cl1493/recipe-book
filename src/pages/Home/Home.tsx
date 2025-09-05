import { useEffect, useState } from "react";
import { getRecipes } from "../../services/api";
import RecipeCard from "../../components/RecipeCard/RecipeCard.jsx";
import './Home.css'

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
            <RecipeCard/>
    </div>
    )
}
export default Home;