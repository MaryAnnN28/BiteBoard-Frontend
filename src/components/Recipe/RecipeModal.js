import React from 'react';
import './Modal.css';
import { IconButton, Box, UnorderedList, ListItem, ListIcon, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogContent, AlertDialogOverlay, AlertDialogHeader, Button } from "@chakra-ui/react";
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

   // code for delete alert modal 
   const [isOpen, setIsOpen] = React.useState(false)
   const onClose = () => setIsOpen(false)
   const cancelRef = React.useRef()

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

               <div class="text-content"><strong>Ingredients</strong></div>
               <ul className="ingredient-list">
               {recipe.recipe_ingredients.map(ingredient =>
                  <li>
                  <div class="key">{ingredient.ingredient.name}</div>
                  <div class="value">{ingredient.measurement}</div>
                  </li>)}
               </ul>
               <br/>
               
            <p class="text-content"><strong>Directions:</strong> {recipe.directions}</p>

            <center>
               <Box>
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
                     // onClick={handleDelete} <--- Directly deletes without alert
                     onClick={() => setIsOpen(true)}
                     mt="6"
                     mb="6"
                  />
               </Box>


               <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
               >
                  <AlertDialogOverlay>
                     <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          <strong>Delete Recipe</strong> 
                        </AlertDialogHeader>

                        <AlertDialogBody>
                           Are you sure you want to delete the  
                           <strong> {recipe.name}</strong> recipe? <br />
                        </AlertDialogBody>
                        <AlertDialogFooter>
                           <Button ref={cancelRef} onClick={onClose}>
                              Cancel
                           </Button>
                           <Button colorScheme="red" onClick={handleDelete} ml={3}>
                              Delete
                           </Button>
                        </AlertDialogFooter>
                     </AlertDialogContent>
                  </AlertDialogOverlay>
                  </AlertDialog>
              
             


            </center>
       
         </section>

      </div>
   );
};

export default RecipeModal; 