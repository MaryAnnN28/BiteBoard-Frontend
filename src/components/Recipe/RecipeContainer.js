import React from 'react'; 
import RecipeComponent from './RecipeComponent';
import { Box } from "@chakra-ui/react"

class RecipeContainer extends React.Component {
   render() {
      return (
         // <div>
            <Box w="78%">
               {this.props.recipes.map((recipe) =>
                  <RecipeComponent key={recipe.id} recipe={recipe} />)}
            </Box>
         
      )
   }
}

export default RecipeContainer; 