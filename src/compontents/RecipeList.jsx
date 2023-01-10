
export default function RecipeList(props) {
    return (
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
      <button onClick={props.resetButton}>Try Again!</button>
    </div>
    )
}