import React from 'react';
import './Modal.css';
import { IconButton, Box, UnorderedList, ListItem, ListIcon } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';

const BASE_URL = "http://localhost:3000/recipes/"

const RecipeModal = ({ handleClose, show, recipe, chooseRecipe, deleteRecipe }) => {

   const showHideClassName = show ? "modal display-block" : "modal display-none";

   const history = useHistory();
   const handleClick = () => {
      chooseRecipe(recipe)
      history.push('/EditRecipeForm')
   };

   const handleDelete = () => {
      fetch(BASE_URL + recipe.id, {method: "DELETE"})
         .then(r => r.json())
         .then(() => {
            deleteRecipe(recipe)
            handleClose()
         })
   }

   return (
      <div className={showHideClassName}>
         <section className="modal-main">
           
            <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}></button>
           
            <center>
               <br />
               <h3 class="recipe-title">{recipe.name}</h3>
               <br />
               <img class="modal-card-img-top" src={recipe.image_url} class="card-img-top" alt="" />
            </center>
               
               <br />
                
                <ul class="text-content">
                  <li> 
                  <div class="key"><strong>Category:</strong></div>
                  <div class="value">{recipe.category}</div>
                  </li>
                  <li> 
                  <div class="key"><strong>Rating:</strong></div>
                  <div class="value">{recipe.rating}</div>
                  </li>
                  <li> 
                  <div class="key"><strong>Difficulty:</strong></div>
                  <div class="value">{recipe.difficulty}</div>
                  </li>
                  <li> 
                  <div class="key"><strong>Cook Time:</strong></div>
                  <div class="value">{recipe.cook_time}</div>
                  </li>
               </ul>
     
               <br/>
               <strong>Ingredients:</strong>
               <ul>
                  {recipe.recipe_ingredients.map(ingredient => <li>{ingredient.ingredient.name} - {ingredient.measurement}</li>)}
               </ul>
               <br/>
               {/* <UnorderedList>
                  {recipe.recipe_ingredients.map(ingredient => {
                     <ListItem>
                        <ListIcon as={ArrowRightIcon} color="green" />
                        {ingredient.ingredient.name} - {ingredient.measurement}
                     </ListItem>
                  })}
               </UnorderedList> */}
               <p class="text-content"><strong>Directions:</strong> {recipe.directions}</p>
               <Box>
                  {/* <Button mr="4" onClick={handleClick} rightIcon={<EditIcon />} colorScheme="green" variant="outline">
                     Edit
                  </Button> */}
                  <IconButton
                     variant="outline"
                     colorScheme="green"
                     aria-label="Edit recipe"
                     icon={<EditIcon />}
                     onClick={handleClick}
                     mr="4"
                     mt="6"
                     mb="6"
                  />
                  <IconButton
                     variant="outline"
                     colorScheme="green"
                     aria-label="Delete recipe"
                     icon={<DeleteIcon />}
                     onClick={handleDelete}
                     mt="6"
                     mb="6"
                  />
               </Box>

       
         </section>

      </div>
   );
};

export default RecipeModal; 