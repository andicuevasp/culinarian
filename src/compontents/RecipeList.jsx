export default function RecipeList(props) {

  const recipeElement = props.recipeData.map((recipe) => {
    return (
      <ul key={recipe.title}>
        <li>
          <a href={recipe.sourceUrl} target='_blank'>
            <img src={recipe.image} />
            <h4>{recipe.title}</h4>
          </a>
        </li>
      </ul>
    );
  });

  return (
    <div>
      {props.recipeData.length < 1? `<h2>Looks like we can't find any recipes with your ingredients. Try searching with a new set of ingredients!</h2>`: `<h2>
        Here are the recipes available for ${props.formData.firstIngredient}, ${props.formData.secondIngredient} and ${props.formData.thirdIngredient}.
      </h2>`}
      {recipeElement}
      <button onClick={props.resetButton}>Try Again!</button>
    </div>
  );
}
