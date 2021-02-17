import React, { Component } from 'react'; 
import './Recipes.css'

  class RecipeComponent extends Component {
    render() {
      return (

          <div className="card">
          <img class="card-img-top" src={this.props.recipe.image_url} class="card-img-top" width="100%" alt=""/>
            <div class="card-body">
              <center><h5 class="card-title">{this.props.recipe.name}</h5></center>
              <p class="card-text">
                <center> <strong>{this.props.recipe.category}</strong>  </center>
                <br />
                <strong>Level: </strong>{this.props.recipe.difficulty} &nbsp; &nbsp; &nbsp;
            
              <strong>Rating: </strong> {this.props.recipe.rating}
              <br />
              Cook Time &nbsp; <strong>{this.props.recipe.cook_time}</strong>
              </p>
            
            </div>
          </div>
         
      );
    }
}

export default RecipeComponent; 