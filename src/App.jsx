import Header from "./compontents/Header"
import IngredientsForm from "./compontents/IngredientsForm";
import RecipeList from "./compontents/RecipeList";
import { useState } from 'react'
import dataCopy from "./dataCopy"


function App() {

  const [beginSearch,setBeginSearch] = useState(false);
  const [formData,setFormData] = useState(
    {
      firstIngredient:"",
      secondIngredient:"",
      thirdIngredient: ""
    }
  );
  const [recipe,setRecipe] = useState( 
    {
      recipeSourceUrl:"",
      recipeImage:"",
      recipeTitle
    }
  );
  const [recipeData,setRecipeData] = useState(dataCopy.results.map(recipe=> {
    return recipe
  }))

  function searchRecipes(firstIng,secondIng,thirdIng) {
    setBeginSearch(true)
    
    const ingredientsList = dataCopy.results.map(recipe=> {
      return recipe.ingredients.map(ingredient=> {
        return ingredient.name
      })
    })
    
    if(ingredientsList.includes(firstIng) && ingredientsList.includes(secondIng) && ingredientsList.includes(thirdIng)) {
      setRecipe(prevRecipe=> {
        {
          recipeSourceUrl: dataCopy.results.map(recipe=>{
            return recipe.sourceUrl
          }),
          re
        }
      })
    }
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
