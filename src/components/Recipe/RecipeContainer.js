import React from 'react'; 
import AddRecipeCard from './AddRecipeCard'
import RecipeComponent from './RecipeComponent';
import RecipeShowPage from './RecipeShowPage'; 

import { SimpleGrid, Box } from "@chakra-ui/react";


class RecipeContainer extends React.Component {

   componentWillUnmount() {
      return this.props.recipeContainerUnmounted()
   }

   render() {
     return (
        <Box w="80%">
            <SimpleGrid minChildWidth="18.5rem" >
              <AddRecipeCard />
                  {this.props.recipes.length > 0 ? 
                     this.props.recipes.map((recipe) =>
                        <RecipeComponent key={recipe.id} chooseRecipe={this.props.chooseRecipe} recipe={recipe} />)
                     : <h1>No matches</h1>
              }
              
             
            </SimpleGrid>
       </Box>
         
      )
   }
}

export default RecipeContainer; 