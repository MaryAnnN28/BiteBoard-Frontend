import React from 'react'; 
import './Recipes.css'


class NewRecipeForm extends React.Component {

  componentDidMount() {
    return this.props.handlePageChange('other')
  }

  componentWillUnmount() {
    return this.props.handlePageChange('home')
  }

   render() {
    return (
      <div class="form-container">
         <br />
         <form>
          
    <div class="form-group row">
    <label for="recipe-name" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputRecipeName" placeholder="Enter recipe name" />
    </div>
    </div>
          
    <div class="form-group row">
    <label for="recipe-image" class="col-sm-2 col-form-label">Image</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputImage" placeholder="Image url" />
    </div>
    </div>
          

    <div class="form-group row">
    <label for="recipe-image" class="col-sm-2 col-form-label">Image</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputImage" placeholder="Image url" />
    </div>
    </div>
          
  <div class="form-group">
    <label for="recipe-image">Image</label>
    <input type="text" class="form-control" id="recipe-name" placeholder="enter image url" />
          </div>
          
          <div class="form-group">
    <label for="recipe-image">Image</label>
    <input type="text" class="form-control" id="recipe-name" placeholder="enter image url" />
  </div>
          
  <div class="form-group">
    <label for="exampleFormControlSelect1">Select Category</label>
    <select class="form-control">
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


  <div class="form-group">
    <label for="exampleFormControlTextarea1">Directions</label>
    <textarea class="form-control" id="recipe-directions" rows="3"></textarea>
  </div>
</form>
         </div>

      )
   }
}

export default NewRecipeForm; 