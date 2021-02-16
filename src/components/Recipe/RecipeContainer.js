import React from 'react'; 
import RecipeComponent from './RecipeComponent';

class RecipeContainer extends React.Component {
   render() {
      return (
         <div>
            <h1>Recipes Page</h1>
            {this.props.recipes.map((recipe) =>
               <RecipeComponent key={recipe.id} recipe={recipe} />)}


         </div>
      )
   }
}

export default RecipeContainer; 