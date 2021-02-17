import React from 'react';
import './Recipes.css';

class RecipeShowPage extends React.Component {
   render() {
     
      return (
         <div class="recipe-show-page-container">
            <br />
            <h1 class="recipe-show-page-title">Recipe Show Page</h1>
            <h3>{this.props.recipe.name}</h3>

            <img class="card-img-top" src={this.props.recipe.image_url} class="card-img-top" width="100%" alt="" />
            
            <p>
               Category: {this.props.recipe.category} 
               <br />
               Difficulty: {this.props.recipe.difficulty} 
               <br />
               Rating: {this.props.recipe.rating} 
               <br />
               Cook Time:{this.props.recipe.cook_time} 
               <br />
            </p>

            <br />

            <h3>Ingredients</h3>
            <p>{this.props.recipe.ingredients} </p>

            <h3>Directions</h3>
            <p>{this.props.recipe.directions} </p>
       
           
         </div>
      )
   }
} 

export default RecipeShowPage; 