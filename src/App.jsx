import Header from "./compontents/Header"
import IngredientsForm from "./compontents/IngredientsForm";
import RecipeList from "./compontents/RecipeList";
import { useState } from 'react'



function App() {

  const [beginSearch,setBeginSearch] = useState(false);
  const [formData,setFormData] = useState(
    {
      firstIngredient:"",
      secondIngredient:"",
      thirdIngredient: ""
    }
  );

  function searchRecipes() {
    setBeginSearch(true)
  }
  function handleChange(e) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [e.target.name]: e.target.value
        }
    })
  }

  function resetButton() {
    setBeginSearch(false)
  }

  

  return (
    <main>
      <Header />
    { !beginSearch 
    ? <IngredientsForm 
    searchRecipes={searchRecipes}
    formData={formData}
    handleChange={handleChange}  
    /> 
    : <RecipeList 
    resetButton={resetButton}
    formData={formData}
    />}
    </main>
  )
}

export default App
