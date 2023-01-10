import Header from "./compontents/Header"
import IngredientsForm from "./compontents/IngredientsForm";
import RecipeList from "./compontents/RecipeList";
import { useState } from 'react'



function App() {

  const [beginSearch,setBeginSearch] = useState(false);

  function searchRecipes() {
    setBeginSearch(true)
  }
  
  function resetButton() {
    setBeginSearch(false)
  }

  return (
    <main>
      <Header />
    { !beginSearch 
    ? <IngredientsForm searchRecipes={searchRecipes}/> 
    : <RecipeList resetButton={resetButton}/>}
    </main>
  )
}

export default App
