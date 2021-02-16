import React from 'react'; 
import RecipeComponent from './RecipeComponent';
import { Box } from "@chakra-ui/react"

class RecipeContainer extends React.Component {
   render() {
      return (
            <Box w="78.5%">
               {this.props.recipes.length > 0 ? 
                  this.props.recipes.map((recipe) =>
                     <RecipeComponent key={recipe.id} recipe={recipe} />)
                  : <h1>No matches</h1>
               }
            </Box>
         
      )
   }
}

export default RecipeContainer; 