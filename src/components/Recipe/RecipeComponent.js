import React, { useState } from 'react'; 
import './Recipes.css';
import { Box } from "@chakra-ui/react";
import RecipeModal from './RecipeModal';



 function RecipeComponent({recipe, chooseRecipe}) {
  
  const history = useHistory();
  const handleClick = () => {
    chooseRecipe(recipe)
    history.push('/EditRecipeForm')
  };
   
   const [show, setShow] = useState(false);
  
    return (
      <div>
      <Box onClick={handleClick}>

            <div className="card" onClick={setShow(true)}>
            <img class="card-img-top" src={recipe.image_url} class="card-img-top" width="100%" alt=""/> 
// class RecipeComponent extends Component {

//   constructor() {
//     super();
//     this.state = {
//       show: false
//     };
//     this.showModal = this.showModal.bind(this);
//     this.hideModal = this.hideModal.bind(this);
//   }

//   showModal = () => {
//     this.setState({ show: true });
//   };

//   hideModal = () => {
//     this.setState({ show: false });
//   };


//     render() {
//       return (
//         <div>
//         <Box onClick={() => console.log(this.props.recipe.name)}>
//             <div className="card" onClick={this.showModal}>
              
//             <img class="card-img-top" src={this.props.recipe.image_url} class="card-img-top" width="100%" alt=""/>
              
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

        
          <RecipeModal show={show} handleClose={setShow(false)} recipe={recipe}> 
            <p>Modal</p>
            
            
           </RecipeModal>
      
        
         
          </div>
      );
}

export default RecipeComponent; 