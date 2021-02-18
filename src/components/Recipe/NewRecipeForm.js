import React from 'react'; 
import './Recipes.css'


class NewRecipeForm extends React.Component {
  
  componentDidMount() {
    return this.props.handlePageChange('create')
  }

  componentWillUnmount() {
    return this.props.handlePageChange('home')
  }

  renderRecipes() {
    this.props.history.push('/recipes');
  }

  render() {
    const { name, image_url, category, rating, difficulty, cook_time, ingredients, directions, handleFormSubmit, handleInputChange } = this.props
    
    return (
      <div className="form-container"><br />
        <h1>Add a New Recipe</h1>
        
        <form className="recipe-form"
          onSubmit={(e) => {
            this.renderRecipes()
            handleFormSubmit(e)
          }}>
          
    <div className="form-group">
      <label for="recipe-name" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
          <input type="text" name="name" className="form-control" id="inputRecipeName" placeholder="Enter recipe name"
          value={name}
          onChange={handleInputChange} />
      </div>
    </div>
          

    <div className="form-group">
      <label for="recipe-image" className="col-sm-2 col-form-label">Image</label>
      <div className="col-sm-10">
          <input type="text" name="image_url" className="form-control" placeholder="Image url" alt=""
          value={image_url}
          onChange={handleInputChange} />
      </div>
    </div>
          
          
  <div className="form-group">
      <label for="recipe-category" className="col-sm-2 col-form-label">Category</label>
        <div className="col-sm-10">
          <select name="category" className="form-control"
            value={category} 
            onChange={handleInputChange}>
            <option>Select a recipe category</option>
            <option>Seafood</option>
            <option>Beef</option>
            <option>Chicken</option>
            <option>Lamb</option>
            <option>Ham</option>
            <option>Pork</option>
            <option>Turkey</option>
            <option>Sausage</option>
            <option>Pasta</option>
            <option>Salad</option>
            <option>Vegetarian</option>
            <option>Soup</option>
            <option>Appetizer</option>
            <option>Dessert</option>
          </select>
        </div>
    </div>


    <div className="form-group">
      <label for="recipe-rating" className="col-sm-2 col-form-label">Rating</label> 
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="rating" value={"1 of 5"}
            checked={this.props.formState.rating === "1 of 5"} 
            onChange={handleInputChange}
            />
          <label className="form-check-label" for="inlineRadio1">1</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="rating" value={"2 of 5"}
            checked={this.props.formState.rating === "2 of 5"} 
            onChange={handleInputChange}
            />
          <label className="form-check-label" for="inlineRadio2">2</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="rating" value={"3 of 5"}
            checked={this.props.formState.rating === "3 of 5"}
            onChange={handleInputChange}
            />
          <label className="form-check-label" for="inlineRadio2">3</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="rating" value={"4 of 5"}
            checked={this.props.formState.rating  === "4 of 5"}
            onChange={handleInputChange}
            />
          <label className="form-check-label" for="inlineRadio2">4</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="rating" value={"5 of 5"}
              checked={this.props.formState.rating === "5 of 5"}
              onChange={handleInputChange}
            />
          <label className="form-check-label" for="inlineRadio2">5</label>
        </div>
    </div>

 
    <div className="form-group">
        <label for="recipe-difficulty" className="col-sm-2 col-form-label">
              Difficulty
            </label> 

      <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="difficulty" value={"Easy"}
          checked={this.props.formState.difficulty === "Easy"} 
          onChange={handleInputChange}
          />
          <label className="form-check-label" for="inlineRadio1">Easy</label>
      </div>
            
      <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="difficulty" value={"Intermediate"}
          checked={this.props.formState.difficulty  === "Intermediate"} 
          onChange={handleInputChange}
          />
          <label className="form-check-label" for="inlineRadio2">Intermediate</label>
      </div>
            
      <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="difficulty" value={"Difficult"}
            checked={this.props.formState.difficulty === "Difficult"} 
            onChange={handleInputChange}
          />
          <label className="form-check-label" for="inlineRadio2">Difficult</label>
      </div>
    </div>

          
    <div className="form-group">
      <label for="recipe-difficulty" className="col-sm-4 col-form-label">Prep & Cook Time</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name="cook_time"
            value={cook_time}
            onChange={handleInputChange}>
              <option>Select time</option>
              <option value="0-10min">0-10 min</option>
              <option value="10-20min">10-20 min</option>
              <option value="20-30min">20-30 min</option>
              <option value="30-40min">30-40 min</option>
              <option value="40-50min">40-50 min</option>
              <option value="50-60min">50-60 min</option>
              <option value="60-70min">60-70 min</option>
              <option value="70-80min">70-80 min</option>
              <option value="80-90min">80-90 min</option>
              <option value="90-100min">90-100 min</option>
              <option value="100-110min">100-110 min</option>
              <option value="110-120min">110-120 min</option>
              <option value="120-130min">120-130 min</option>
              <option value="130-140min">130-140 min</option>
          </select>
        </div>
    </div>
          

    <div className="form-group">
      <label for="ingredients-textarea" className="col-sm-4 col-form-label">
        Ingredients</label>
      <textarea
        name="ingredients"
        className="form-control"
        id="recipe-ingredients"
        rows="4"
        placeholder="Add each ingredient separated by a comma or semicolon (i.e. butter, salt, olive oil, etc...)"
        value={ingredients}
        onChange={handleInputChange}
        >
      </textarea>
    </div>

          
    <div className="form-group">
      <label for="directions-textarea" className="col-sm-4 col-form-label">
        Recipe Directions</label>
      <textarea
        name="directions"
        className="form-control"
        id="recipe-directions"
        rows="4"
        placeholder="Add each direction separated by a comma or semicolon (i.e. preheat oven to 350, chop onions, etc...)"
        value={directions}
        onChange={handleInputChange}
        >
      </textarea>
    </div>
    
    <br />
  
    <button
      type="submit"
      className="btn btn-primary mb-2">
      Add Recipe
      </button>

  </form>
  </div>

    )
  }
}

export default NewRecipeForm; 