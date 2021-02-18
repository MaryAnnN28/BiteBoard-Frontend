import React, { useState } from 'react'; 
import './Recipes.css';
import { Box } from "@chakra-ui/react";
import RecipeModal from './RecipeModal';



function RecipeComponent({recipe, chooseRecipe, deleteRecipe}) {
   
   const [show, setShow] = useState(false);
  
    return (
      <div>
      <Box >

            <div className="card" onClick={() => setShow(true)}>
            <img class="card-img-top" src={recipe.image_url} class="card-img-top" width="100%" alt=""/> 
              
              <div class="card-body">
                <center><h5 class="card-title">{recipe.name}</h5></center>
                <p class="card-text">
                  <center> <strong>{recipe.category}</strong>  </center>
                  <br />
                  <strong>Level: </strong>{recipe.difficulty} &nbsp; &nbsp; &nbsp;
              
                <strong>Rating: </strong> {recipe.rating}
                <br />
                Cook Time &nbsp; <strong>{recipe.cook_time}</strong>
                </p>
              
              </div>
          </div>

        </Box>

        
          <RecipeModal deleteRecipe={deleteRecipe} chooseRecipe={chooseRecipe} show={show} handleClose={() => setShow(false)} recipe={recipe}> 
            <p>Modal</p>
            
            
           </RecipeModal>
      
        
         
          </div>
      );
}

export default RecipeComponent; 