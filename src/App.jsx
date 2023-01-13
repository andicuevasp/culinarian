import Header from "./compontents/Header"
import IngredientsForm from "./compontents/IngredientsForm";
import RecipeList from "./compontents/RecipeList";
import { useState,useEffect } from 'react'



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
      recipeTitle: ""
    }
  );
  const [recipeData,setRecipeData] = useState([]);

  function handleChange(e) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [e.target.name]: e.target.value
        }
    })
  }

  useEffect(() => {
    async function getRecipes(){
      const res= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=63966116a4304fd2b37f3b26f45720a9&includeIngredients=${formData.firstIngredient},${formData.secondIngredient},${formData.thirdIngredient}&number=5&addRecipeInformation=true`)
      const data = await res.json();
      setRecipeData(data.results.map(recipe=> {
        return recipe
      }))
      console.log(recipeData)
    }
     getRecipes(); 
  }, [recipe])

  function searchRecipes() {
    setBeginSearch(true)
    setRecipe(prevRecipe=> {
      return recipeData.map(recipe=>{
        return (
          {
            ...prevRecipe,
            recipeSourceUrl: recipe.sourceUrl,
            recipeImage: recipe.image,
            recipeTitle: recipe.title
          }
        )
      })
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
    recipe={recipe}
    />}
    </main>
  )
}

export default App
