import { Route, Routes, Navigate } from "react-router-dom"
import Home from "../pages/Home/Home"
import RecipeDetail from "../pages/RecipeDetail/RecipeDetail"

export const AppRouter = () => {
    return(

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/recipes/:recipeId' element={<RecipeDetail/>}></Route>
      <Route path='/add-recipe' element={<h1>Añadir receta</h1>}></Route>
      <Route path='/favorites' element={<h1>Favoritos</h1>}></Route>
      <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>

    )
}