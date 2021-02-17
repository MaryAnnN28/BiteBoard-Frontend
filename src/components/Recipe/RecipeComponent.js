import React, { Component } from 'react'; 
import './Recipes.css';
import { Box } from "@chakra-ui/react";
import RecipeModal from './RecipeModal';



class RecipeComponent extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


    render() {
      return (
        <div>
        <Box onClick={() => console.log(this.props.recipe.name)}>
            <div className="card" onClick={this.showModal}>
              
            <img class="card-img-top" src={this.props.recipe.image_url} class="card-img-top" width="100%" alt=""/>
              <div class="card-body">
                <center><h5 class="card-title">{this.props.recipe.name}</h5></center>
                <p class="card-text">
                  <center> <strong>{this.props.recipe.category}</strong>  </center>
                  <br />
                  <strong>Level: </strong>{this.props.recipe.difficulty} &nbsp; &nbsp; &nbsp;
              
                <strong>Rating: </strong> {this.props.recipe.rating}
                <br />
                Cook Time &nbsp; <strong>{this.props.recipe.cook_time}</strong>
                </p>
              
              </div>
          </div>
        </Box>

        
          <RecipeModal show={this.state.show} handleClose={this.hideModal} recipe={this.props.recipe}> 
            <p>Modal</p>
            
            
           </RecipeModal>
      
        
         
          </div>
      );
    }
}

export default RecipeComponent; 