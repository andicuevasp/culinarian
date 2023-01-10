
export default function IngredientsForm(props) {
    console.log(props)
    return (
        <div className='ingredients-section'>
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
      <button onClick={props.searchRecipes}>Let's cook!</button>
    </div>
    )
}