import React from 'react'; 
import RecipeComponent from './RecipeComponent';
import './Recipes.css'


class RecipeContainer extends React.Component {
  render() {
    return (
    
      <div class="recipe-collection">
  
        {this.props.recipes.map(recipe =>
          <RecipeComponent key={recipe.id} recipe={recipe} />
        )}
     
     </div>
    )
  }
}

export default RecipeContainer; 