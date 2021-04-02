import React from 'react'; 
import AddRecipeCard from './AddRecipeCard'
import RecipeComponent from './RecipeComponent';
import './Recipes.css';


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
                        <RecipeComponent history={this.props.history} key={recipe.id} deleteRecipe={this.props.deleteRecipe} chooseRecipe={this.props.chooseRecipe} recipe={recipe} />)
                     : <Box ml="20" mt="8"><strong><h1>No matches</h1></strong></Box>
              }
              
             
            </SimpleGrid>
       </Box>
         
      )
   }
}

export default RecipeContainer; 