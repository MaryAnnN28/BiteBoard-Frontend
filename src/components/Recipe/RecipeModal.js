import React from 'react';
import './Modal.css';

const RecipeModal = ({ handleClose, show, recipe }) => {

   const showHideClassName = show ? "modal display-block" : "modal display-none";

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

               <br />
               <p class="text-content">
               <strong>Directions:</strong> <br />
               {recipe.directions}
               </p>
               
         </section>

      </div>
   );
};

export default RecipeModal; 