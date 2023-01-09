import { useState } from 'react'
import chefHat from "../src/assets/chef-hat.png"


function App() {

  const [beginSearch,setBeginSearch] = useState(false);

  function searchRecipes() {
    setBeginSearch(true)
  }

  return (
    <main>
      <header>
        <img src={chefHat}/>
        <h1>Culinarian</h1>
      </header>
    { !beginSearch ? (<div className='ingredients-section'>
      <h2>
      Enter 3 ingredients currently available in your kitchen to get a list of recipes
      that you can whip up with them
      </h2>
      <div className='ingredients-form'>
        <h3>Ingredient 1</h3>
        <form className='ingredients'>
          <input
            className="ingredient-input"
            type="text"
            placeholder=""
            name="ingredient"
            value=""
            />
        </form>
        <h3>Ingredient 2</h3>
        <form className='ingredients'>
          <input
            className="ingredient-input"
            type="text"
            placeholder=""
            name="ingredient"
            value=""
            />
        </form>
        <h3>Ingredient 3</h3>
        <form className='ingredients'>
          <input
            className="ingredient-input"
            type="text"
            placeholder=""
            name="ingredient"
            value=""
            />
        </form>
      </div>
    </div>
    ) : (
    <div>
      <h2>Here are the recipes available for apples, flour and butter.</h2>
      <ul>
        <li>
          <a href=''>
            <img src="" />
            <h4>Recipe</h4>
          </a>
        </li>
      </ul>

    </div>

    )}
      <button onClick={searchRecipes}>Let's cook!</button>

    </main>
  )
}

export default App
