import React, { useState } from 'react'; 
import './Recipes.css';
import { Box } from "@chakra-ui/react";
import RecipeModal from './RecipeModal';



function RecipeComponent({recipe, chooseRecipe, deleteRecipe, history}) {

   
   const [show, setShow] = useState(false);
  
    return (
      <div>

      <Box >

            <div className="card" onClick={() => setShow(true)}>
            <img class="card-img-top" src={recipe.image_url} class="card-img-top" width="100%" alt=""/> 
                                    
              <div class="card-body">
              <center><h5 class="card-title">{recipe.name}</h5></center>

              <div class="p-rating">
                <button class="p-rating-star">☆</button>
                <button class="p-rating-star">★</button>
                <button class="p-rating-star">★</button>
                <button class="p-rating-star">★</button>
                <button class="p-rating-star">★</button>
              </div>

         
              
                <p class="card-text">
                  <strong>{recipe.category}</strong> <br />
                  <strong>Level: </strong>{recipe.difficulty} &nbsp; &nbsp; &nbsp;
              
                <strong>Rating: </strong> {recipe.rating}
                <br />
                Cook Time &nbsp; <strong>{recipe.cook_time}</strong>
                </p>
              
              </div>
          </div>

          

        </Box>

        

          <RecipeModal history={history} deleteRecipe={deleteRecipe} chooseRecipe={chooseRecipe} show={show} handleClose={() => setShow(false)} recipe={recipe}> 

            <p>Modal</p>
            
            
           </RecipeModal>
      
        
         
          </div>
      );
}

export default RecipeComponent; 