import React from 'react';
import './Modal.css';

const RecipeModal = ({ handleClose, show, recipe }) => {

   const showHideClassName = show ? "modal display-block" : "modal display-none";

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


               
            </center>
           
         </section>
      </div>
   );
};

export default RecipeModal; 