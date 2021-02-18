import React from 'react'; 
import './Recipes.css';
const BASE_URL = "http://localhost:3000/recipes/";


class EditRecipeForm extends React.Component {
  
  state = {
    name: this.props.name,
    image_url: this.props.image_url,
    rating: this.props.rating,
    difficulty: this.props.difficulty,
    cook_time: this.props.cook_time,
    category: this.props.category,
    directions: this.props.directions
  }

  componentDidMount() {
    return this.props.handlePageChange('edit')
  }

  componentWillUnmount() {
    return this.props.handlePageChange('home')
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderRecipes() {
    this.props.history.push('/recipes');
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const updatedRecipe = this.state

    const reqPack = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify(updatedRecipe)
    }

    fetch(BASE_URL + this.props.id, reqPack)
        .then(r => r.json())
        .then(updatedRecipe => {
            this.props.updateRecipe(updatedRecipe)
            this.renderRecipes()
            e.target.reset()
        })

  }
  
  render() {
      const {name, image_url, rating, difficulty, cook_time, category, directions} = this.state
      return (
      <div className="form-container"><br />
        <h1 className="form-title">Edit Recipe</h1>
        
        <form className="recipe-form"
          onSubmit={this.handleSubmit}>
          
    <div className="form-group">
      <label for="recipe-name" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
          <input type="text" name="name" className="form-control" id="inputRecipeName" placeholder="Enter recipe name"
          value={name}
          onChange={this.handleInputChange} />
      </div>
    </div>
          

    <div className="form-group">
      <label for="recipe-image" className="col-sm-2 col-form-label">Image</label>
      <div className="col-sm-10">
          <input type="text" name="image_url" className="form-control" placeholder="Image url" alt=""
          value={image_url}
          onChange={this.handleInputChange} />
      </div>
    </div>
          
          
  <div className="form-group">
      <label for="recipe-category" className="col-sm-2 col-form-label">Category</label>
        <div className="col-sm-10">
          <select name="category" className="form-control"
            value={category} 
            onChange={this.handleInputChange}>
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
            checked={rating === "1 of 5"} 
            onChange={this.handleInputChange}
            />
          <label className="form-check-label" for="inlineRadio1">1</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="rating" value={"2 of 5"}
            checked={rating === "2 of 5"} 
            onChange={this.handleInputChange}
            />
          <label className="form-check-label" for="inlineRadio2">2</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="rating" value={"3 of 5"}
            checked={rating === "3 of 5"}
            onChange={this.handleInputChange}
            />
          <label className="form-check-label" for="inlineRadio2">3</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="rating" value={"4 of 5"}
            checked={rating === "4 of 5"}
            onChange={this.handleInputChange}
            />
          <label className="form-check-label" for="inlineRadio2">4</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="rating" value={"5 of 5"}
              checked={rating === "5 of 5"}
              onChange={this.handleInputChange}
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
          checked={difficulty === "Easy"} 
          onChange={this.handleInputChange}
          />
          <label className="form-check-label" for="inlineRadio1">Easy</label>
      </div>
            
      <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="difficulty" value={"Intermediate"}
          checked={difficulty === "Intermediate"} 
          onChange={this.handleInputChange}
          />
          <label className="form-check-label" for="inlineRadio2">Intermediate</label>
      </div>
            
      <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="difficulty" value={"Difficult"}
            checked={difficulty === "Difficult"} 
            onChange={this.handleInputChange}
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
            onChange={this.handleInputChange}>
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
      <label for="directions-textarea" className="col-sm-4 col-form-label">
        Recipe Directions</label>
      <textarea
        name="directions"
        className="form-control"
        id="recipe-directions"
        rows="4"
        value={directions}
        onChange={this.handleInputChange}
        >
      </textarea>
    </div>
    
    <br />
  
    <button
      type="submit"
      className="btn btn-primary mb-2">
      Edit Recipe
      </button>

  </form>
  </div>

    )
  }
}

export default EditRecipeForm; 