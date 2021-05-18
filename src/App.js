import React from "react";
import './App.css';
import './components/Recipe/Recipes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavbarContainer from './components/Navbar/NavbarContainer';
import RecipeContainer from './components/Recipe/RecipeContainer';
import FilterContainer from './components/Filter/FilterContainer';
import NewRecipeForm from './components/Recipe/NewRecipeForm';
import EditRecipeForm from './components/Recipe/EditRecipeForm';

import { ChakraProvider, Flex, Spacer } from "@chakra-ui/react";

const BASE_URL = "http://localhost:3000/recipes/";
const INGREDIENTS_URL = "http://localhost:3000/ingredients/";

class App extends React.Component {


  state = {
    recipes: [],
    ingredients: [],
    search: "",
    filterCategory: "",
    filterDifficulty: "",
    sortFilter: "none",
    page: "home",
    chosenRecipe: {},
    chosenIngredient: null
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(recipeData => this.setState({
        recipes: recipeData
      }))

    fetch(INGREDIENTS_URL)
      .then(r => r.json())
      .then(ingredientData => {
        this.setState({
          ingredients: ingredientData
        })
      })

  }

  handleCheck = (checkedIngredient) => {
    if (this.state.chosenIngredient !== checkedIngredient) {
      this.setState({chosenIngredient: checkedIngredient})
    } else {
      this.setState({chosenIngredient: null})
    }
  }

  updateRecipe = (updatedRecipe) => {
    this.setState({
      recipes: this.state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
    })
  }

  deleteRecipe = (deletedRecipe) => {
    this.setState({
      recipes: this.state.recipes.filter(recipe => recipe !== deletedRecipe)
    })
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filter = () => {
    let recipes = this.state.recipes;

    if (this.state.filterCategory !== "") {
      recipes = recipes.filter(recipe => recipe.category === this.state.filterCategory)
    };

    if (this.state.filterDifficulty !== "") {
      recipes = recipes.filter(recipe => recipe.difficulty === this.state.filterDifficulty)
    };

    if (this.state.sortFilter !== "none") {
      this.state.sortFilter === "Cook Time"
        ? recipes = recipes.sort((a, b) => (+(a.cook_time.split("-")[0]) > +(b.cook_time.split("-")[0]) ? 1 : -1))
        : recipes = recipes.sort((a, b) => (+(a.rating.split(" ")[0]) < +(b.rating.split(" ")[0]) ? 1 : -1))
    };

    if (!!this.state.chosenIngredient) {
      const newRecipes = []
      recipes.forEach(recipe => recipe.recipe_ingredients.forEach(recipeIngredient => {
        if (recipeIngredient.ingredient.name === this.state.chosenIngredient.name) {
          newRecipes.push(recipe)
        }
      }))
      recipes = newRecipes
    };

    recipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.search.toLowerCase()));

    return recipes
  }

  handleCategorySelect = (e) => {
    this.setState({
      filterCategory: e.target.value
    })
  }

  handleDifficultySelect = (e) => {
    this.setState({
      filterDifficulty: e.target.value
    })
  }

  handlePageChange = (arg) => {
    this.setState({
      page: arg
    })
  }

  addRecipe = (newRecipeData) => {
    this.setState({
      recipes: [...this.state.recipes, newRecipeData]
    })
  }

  addRecipeIngredients = (updatedRecipe) => {
    this.setState({
      recipes: this.state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
    })
  }

  handleSort = (e) => {
    this.setState({
      sortFilter: e.target.value
    })
  }


  recipeContainerUnmounted = () => {
    this.setState({
      search: "",
      filterCategory: "",
      filterDifficulty: "",
      sortFilter: "none",
      chosenIngredients: []
    })
  }

  chooseRecipe = (recipe) => {
    this.setState({
      chosenRecipe: recipe
    })
  }


  render() {
    
    return (
      <Router>
        <div>
          

          <ChakraProvider>
            <NavbarContainer page={this.state.page} />
            {this.state.page === "home"
              ? <Flex m="6">
                <FilterContainer handleCheck={this.handleCheck} chosenIngredient={this.state.chosenIngredient} ingredients={this.state.ingredients} handleSort={this.handleSort} sortFilter={this.state.sortFilter} handleDifficultySelect={this.handleDifficultySelect} handleCategorySelect={this.handleCategorySelect} search={this.state.search} handleSearch={this.handleSearch} recipes={this.filter()} />
                <Spacer />

                <Route path="/recipes" render={(routerProps) =>
                  <RecipeContainer 
                    deleteRecipe={this.deleteRecipe} 
                    chooseRecipe={this.chooseRecipe} 
                    recipeContainerUnmounted={this.recipeContainerUnmounted} 
                    recipes={this.filter()} 
                    {...routerProps} />} 
                  />
                
              </Flex>
              : null

            }
            <Route path='/NewRecipeForm' render={(routerProps) =>

              <NewRecipeForm addRecipeIngredients={this.addRecipeIngredients} addRecipe={this.addRecipe} ingredients={this.state.ingredients} handlePageChange={this.handlePageChange} {...routerProps} />} />

            <Route path='/EditRecipeForm' render={(routerProps) =>

              <EditRecipeForm updateRecipe={this.updateRecipe} {...this.state.chosenRecipe} handlePageChange={this.handlePageChange} {...routerProps} />} />
          </ChakraProvider>

          
      <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div class="container">
                  
                <div class="row">
                  <div class="footer-pad">
                      <img src="https://i.imgur.com/fjkMe6H.png" alt="bite-board-logo" />
                      <h4>
                      {/* &nbsp; &nbsp; &nbsp; &nbsp; */}
                      <a href="https://github.com/MaryAnnN28">Mary Ann Navarrete</a> 
                      &nbsp; &nbsp; | &nbsp; &nbsp;
                      <a href="https://github.com/kirstybrews">Kirsty Brewster</a>
                    </h4>
                    <br />
                    &copy; Copyright 2021 - BiteBoard.  All rights reserved.
                  </div>
                  </div>
        
            <div class="row">
                  <div class="col-md-12 copy">
                    <br /> 
                
                   
		          </div>
	          </div>
              </div>
              </div>
     
      </footer>


        </div>
      </Router>

    );
  }
}


export default App; 