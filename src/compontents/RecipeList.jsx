
export default function RecipeList(props) {

  const recipeElement = props.recipe.map(recipe => {
    return (
      <ul key={recipe.recipeTitle}>
        <li>
          <a href={recipe.recipeSourceUrl} target="_blank">
            <img src={recipe.recipeImage} />
            <h4>{recipe.recipeTitle}</h4>
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