export default function IngredientsForm(props) {
  return (
    <div className='ingredients-section'>
      <h2>Enter <span>3 ingredients</span> currently available in your kitchen to get a list of recipes that you can whip up with them.</h2>
      <div className='ingredients-form'>
        <form className='ingredients' onSubmit={props.handleSubmit}>
            <h3>Ingredient 1</h3>
            <input
              className='ingredient-input'
              type='text'
              placeholder=''
              name='firstIngredient'
              onChange={props.handleChange}
              value={props.formData.firstIngredient}
            />
            <h3>Ingredient 2</h3>
            <input
              className='ingredient-input'
              type='text'
              placeholder=''
              name='secondIngredient'
              onChange={props.handleChange}
              value={props.formData.secondIngredient}
            />
            <h3>Ingredient 3</h3>
            <input
              className='ingredient-input'
              type='text'
              placeholder=''
              name='thirdIngredient'
              onChange={props.handleChange}
              value={props.formData.thirdIngredient}
            />
            <button type='submit'>Let's cook!</button>
          </form>
      </div>
    </div>
  );
}
