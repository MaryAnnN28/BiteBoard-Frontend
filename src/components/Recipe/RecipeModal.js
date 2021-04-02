import React from 'react';
import './Modal.css';
import { IconButton, Box, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogContent, AlertDialogOverlay, AlertDialogHeader, Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
// import { useHistory } from 'react-router-dom';

const BASE_URL = "http://localhost:3000/recipes/"

class RecipeModal extends React.Component {

   
   handleClick = () => {
      this.props.chooseRecipe(this.props.recipe)
      this.props.history.push('/EditRecipeForm')
   };
   
   handleDelete = () => {
      fetch(BASE_URL + this.props.recipe.id, {method: "DELETE"})
      .then(r => r.json())
      .then(() => {
         this.props.deleteRecipe(this.props.recipe)
         this.props.handleClose()
      })
   }
   
   // code for delete alert modal 
   
   state = {
      isOpen: false
   }
   
   onClose = () => this.setState({isOpen: false})
   
   
   render() {
      // const cancelRef = React.useRef()
      
      const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

      const { handleClose, recipe } = this.props

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
                        onClick={this.handleClick}
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
                        onClick={() => this.setState({isOpen: true})}
                        mt="6"
                        mb="6"
                     />
                  </Box>
   
   
                  <AlertDialog
                     isOpen={this.state.isOpen}
                     leastDestructiveRef={null}
                     onClose={this.onClose}
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
                              <Button onClick={this.onClose}>
                                 Cancel
                              </Button>
                              <Button colorScheme="red" onClick={this.handleDelete} ml={3}>
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
   }

};

export default RecipeModal; 