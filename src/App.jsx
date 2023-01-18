import Header from './compontents/Header';
import IngredientsForm from './compontents/IngredientsForm';
import RecipeList from './compontents/RecipeList';
import { useState } from 'react';

function App() {
  const [beginSearch, setBeginSearch] = useState(false);
  const [formData, setFormData] = useState({
    firstIngredient: '',
    secondIngredient: '',
    thirdIngredient: '',
  });
  const [recipeData, setRecipeData] = useState([]);

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function getRecipes() {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_CULINARIAN_APP_API_KEY}&includeIngredients=${
        formData.firstIngredient
      },${formData.secondIngredient},${formData.thirdIngredient}&number=5&addRecipeInformation=true`
    );
    const data = await res.json();
    setRecipeData(data.results);
    setBeginSearch(true);
  }

  function resetButton() {
    setBeginSearch(false);
  }

  return (
    <main>
      <Header />
      {!beginSearch ? (
        <IngredientsForm formData={formData} handleChange={handleChange} getRecipes={getRecipes} />
      ) : (
        <RecipeList formData={formData} resetButton={resetButton} recipeData={recipeData} />
      )}
    </main>
  );
}

export default App;
