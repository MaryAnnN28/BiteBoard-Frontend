import React from 'react'; 


class RecipeComponent extends React.Component {
   render() {
      return (
         <div>
            <br />
            <h3>{this.props.recipe.name}</h3>
            <img src={this.props.recipe.image_url} width="40%"/>
            <p>
              <strong>Category: </strong> {this.props.recipe.category}<br />
              <strong>Rating: </strong> {this.props.recipe.rating}<br />
              <strong>Difficulty: </strong> {this.props.recipe.difficulty}<br />
               <strong>Prep Time: </strong>{this.props.recipe.prep_time}<br />
               <strong>Cook Time: </strong>{this.props.recipe.cook_time}<br />

            </p>


         </div>
      )
   }
}

export default RecipeComponent; 