export default function RecipeList(props) {
//maps over recipeData to create list items for each recipe
  const recipeElement = props.recipeData.map((recipe) => {
    return (
        <li key={recipe.title}>
          <a href={recipe.sourceUrl} target='_blank'>
            <img src={recipe.image} />
            <h4>{recipe.title}</h4>
          </a>
        </li>
    );
  });

  return (
    <div className="recipes-section">
      {props.recipeData.length < 1? <h2>Looks like we can't find any recipes with your ingredients. Try searching with a new set of ingredients!</h2>: <h2>
        Here are the recipes available for <span>{props.formData.firstIngredient}</span>, <span>{props.formData.secondIngredient}</span> and <span>{props.formData.thirdIngredient}</span>.
      </h2>}
      <ul className="recipe-list">
        {recipeElement}
      </ul>
     
      <button onClick={props.resetButton}>Try Again!</button>
    </div>
  );
}
