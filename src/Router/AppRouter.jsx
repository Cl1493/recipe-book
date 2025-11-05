import { Route, Routes, Navigate } from "react-router-dom"
import Home from "../pages/Home/Home"
import RecipeDetail from "../pages/RecipeDetail/RecipeDetail"
import AddRecipe from "../pages/AddRecipe/AddRecipe"

export const AppRouter = () => {
    return(

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/recipes/:recipeId' element={<RecipeDetail/>}></Route>
      <Route path='/add-recipe' element={<AddRecipe/>}></Route>
      <Route path='/favorites' element={<h1>Favoritos</h1>}></Route>
      <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>

    )
}