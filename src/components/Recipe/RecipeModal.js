import React from 'react';
import './Modal.css';
import { Button, IconButton, Box } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
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
            <button type="button" onClick={handleClose}>
               Close
            </button>
            <center>
               <h3>{recipe.name}</h3>
               <img class="modal-card-img-top" src={recipe.image_url} class="card-img-top" width="100%" alt="" />

               <p>
                  {recipe.category}  <br />
                  Rating: {recipe.rating} <br />
                  {recipe.difficulty} <br />
                  {recipe.cook_time} <br />

                  {recipe.directions}
               </p>
               <Box>
                  <Button mr="4" onClick={handleClick} rightIcon={<EditIcon />} colorScheme="green" variant="outline">
                     Edit
                  </Button>
                  <IconButton
                     variant="outline"
                     colorScheme="green"
                     aria-label="Delete recipe"
                     icon={<DeleteIcon />}
                     onClick={handleDelete}
                  />
               </Box>


            </center>

         </section>
      </div>
   );
};

export default RecipeModal; 