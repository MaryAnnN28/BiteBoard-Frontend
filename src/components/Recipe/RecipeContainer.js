import React from 'react'; 
import RecipeComponent from './RecipeComponent';
import { Box } from "@chakra-ui/react"

class RecipeContainer extends React.Component {
   render() {
     return (
        
      // <div class="recipe-collection">
         <Box w="80%">
            {this.props.recipes.length > 0 ? 
               this.props.recipes.map((recipe) =>
                  <RecipeComponent key={recipe.id} recipe={recipe} />)
               : <h1>No matches</h1>
            }
         </Box>
      // </div>
         
      )
   }
}

export default RecipeContainer; 