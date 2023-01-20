import Header from './compontents/Header';
import IngredientsForm from './compontents/IngredientsForm';
import RecipeList from './compontents/RecipeList';
import { useState } from 'react';

function App() {
  //state for when the user starts to search for recipes after submitting form
  const [beginSearch, setBeginSearch] = useState(false);
  //object to collect input fields
  const [formData, setFormData] = useState({
    firstIngredient: '',
    secondIngredient: '',
    thirdIngredient: '',
  });
  //info received from API
  const [recipeData, setRecipeData] = useState([]);

  //handles input fields
  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    //fetches recipes from API using input fields
    async function getRecipes() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_CULINARIAN_APP_API_KEY}&includeIngredients=${
          formData.firstIngredient
        },${formData.secondIngredient},${formData.thirdIngredient}&number=10&addRecipeInformation=true`
      );
      const data = await res.json();
      setRecipeData(data.results);
      setBeginSearch(true);
    }
    getRecipes()
  }
  
  //reset if the user wants/needs to try again with new ingredients
  function resetButton(e) {
    console.log(e)
    setBeginSearch(false)
    setFormData({
      firstIngredient: '',
      secondIngredient: '',
      thirdIngredient: '',
    });
    setRecipeData([]);
  }

  return (
    <main>
      <Header />
      {!beginSearch ? (
        <IngredientsForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      ) : (
        <RecipeList formData={formData} resetButton={resetButton} recipeData={recipeData} />
      )}
    </main>
  );
}

export default App;
