import React from 'react'; 
import './Recipes.css'


class NewRecipeForm extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "", 
      image_url: "", 
      category: null, 
      rating: null, 
      difficulty: null, 
      cook_time: "", 
      ingredients: "", 
      directions: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert(`${this.state.name} ${this.state.category}`)
  }

  handleInputChange = () => {

  }
  
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleImageChange = (event) => {
    this.setState({
      image_url: event.target.value
    });
  }

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value
    });
  }

  handleRatingChange = (event) => {
    this.setState({
      rating: event.target.value
    });
  }

  handleDifficultyChange = (event) => {
    this.setState({
      difficulty: event.target.value
    });
  }

  handleCookTimeChange = (event) => {
    this.setState({
      cook_time: event.target.value
    });
  }

  handleDirectionsChange = (event) => {
    this.setState({
      directions: event.target.value
    });
  }

  handleIngredientsChange = (event) => {
    this.setState({
      ingredients: event.target.value
    });
  }




  render() {
    const { name } = this.state 
    
    return (
      <div className="form-container"><br />
        <form className="recipe-form" onSubmit={this.handleSubmit}>
          
    <div className="form-group">
      <label for="recipe-name" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
              <input type="text" name="name" className="form-control" id="inputRecipeName" placeholder="Enter recipe name"
              value={this.state.name}
              onChange={this.handleNameChange} />
      </div>
    </div>
          

    <div className="form-group">
      <label for="recipe-image" className="col-sm-2 col-form-label">Image</label>
      <div className="col-sm-10">
              <input type="text" name="image_url" className="form-control" placeholder="Image url" alt=""
              value={this.state.image_url}
              onChange={this.handleImageChange} />
      </div>
    </div>
          
          
  <div className="form-group">
      <label for="recipe-category" className="col-sm-2 col-form-label">Category</label>
        <div className="col-sm-10">
          <select name="category" className="form-control"
            value={this.state.category} 
            onChange={this.handleCategoryChange}>
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
              <input className="form-check-input" type="radio" name="rating" value="1of5"
              checked={this.state.rating === "1of5"} 
              onChange={this.handleRatingChange}
              />
          <label className="form-check-label" for="inlineRadio1">1</label>
        </div>
        <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="rating" value="2of5"
              checked={this.state.rating === "2of5"} 
              onChange={this.handleRatingChange}
              />
          <label className="form-check-label" for="inlineRadio2">2</label>
        </div>
        <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="rating" value="3of5"
              checked={this.state.rating === "3of5"}
              onChange={this.handleRatingChange}
              />
          <label className="form-check-label" for="inlineRadio2">3</label>
        </div>
        <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="rating" value="4of5"
              checked={this.state.rating === "4of5"}
              onChange={this.handleRatingChange}
              />
          <label className="form-check-label" for="inlineRadio2">4</label>
        </div>
        <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="rating" value="5of5"
                checked={this.state.rating === "5of5"}
                onChange={this.handleRatingChange}
              />
          <label className="form-check-label" for="inlineRadio2">5</label>
        </div>
    </div>

 
    <div className="form-group">
        <label for="recipe-difficulty" className="col-sm-2 col-form-label">
              Difficulty
            </label> 

      <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="difficulty" value="easy"
          checked={this.state.difficulty === "easy"} 
          onChange={this.handleDifficultyChange}
          />
          <label className="form-check-label" for="inlineRadio1">Easy</label>
      </div>
            
      <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="difficulty" value="intermediate"
          checked={this.state.difficulty === "intermediate"} 
          onChange={this.handleDifficultyChange}
          />
          <label className="form-check-label" for="inlineRadio2">Intermediate</label>
      </div>
            
      <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="difficulty" value="difficult"
            checked={this.state.difficulty === "difficult"} 
            onChange={this.handleDifficultyChange}
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
            value={this.state.cook_time}
            onChange={this.handleCookTimeChange}>
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
        placeholder="Add each ingredient separated by a comma (i.e. butter, salt, olive oil, etc...)"
        value={this.state.ingredients}
        onChange={this.handleIngredientsChange}
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
        placeholder="Add each direction separated by a comma (i.e. preheat oven to 350, chop onions, cook pasta, etc...)"
        value={this.state.directions}
        onChange={this.handleDirectionsChange}
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