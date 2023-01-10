import data from "../data"

export default function RecipeList(props) {

  const recipeElement = data.results.map(recipe => {
    return (
      <ul>
        <li>
          <a href={recipe.sourceUrl} target="_blank">
            <img src={recipe.image} />
            <h4>{recipe.title}</h4>
          </a>
        </li>
      </ul>
    )
  })
  
    return (
        <div>
      <h2>Here are the recipes available for {props.formData.firstIngredient}, {props.formData.secondIngredient} and {props.formData.thirdIngredient}.</h2>
      {recipeElement}
      <button onClick={props.resetButton}>Try Again!</button>
    </div>
    )
}