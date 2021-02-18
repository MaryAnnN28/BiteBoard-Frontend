import React from 'react';
import './Modal.css';
import { Button } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';


const RecipeModal = ({ handleClose, show, recipe, chooseRecipe }) => {

   const showHideClassName = show ? "modal display-block" : "modal display-none";

   const history = useHistory();
   const handleClick = () => {
     chooseRecipe(recipe)
     history.push('/EditRecipeForm')
   };

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
               <Button onClick={handleClick} rightIcon={<EditIcon />} colorScheme="green" variant="outline">
                  Edit
               </Button>


            </center>

         </section>
      </div>
   );
};

export default RecipeModal; 