import React from "react";
import './App.css';
import './components/Recipe/Recipes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import NavbarContainer from './components/Navbar/NavbarContainer';
import RecipeContainer from './components/Recipe/RecipeContainer';
import FilterContainer from './components/Filter/FilterContainer';
import NewRecipeForm from './components/Recipe/NewRecipeForm';
import EditRecipeForm from './components/Recipe/EditRecipeForm';

import { ChakraProvider, Flex, Spacer } from "@chakra-ui/react";



const BASE_URL = "http://localhost:3000/recipes/"
const INGREDIENTS_URL = "http://localhost:3000/ingredients/"

class App extends React.Component {


  state = {
    recipes: [],
    search: "",
    filterCategory: "",
    filterDifficulty: "",
    sortFilter: "none",
    category: "",
    page: "home",
    name: "",
    image_url: "",
    rating: null,
    difficulty: null,
    cook_time: "",
    ingredients: [],
    directions: "",
    chosenRecipe: {}
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

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    let newRecipe = {
      name: event.target.name.value,
      image_url: event.target.image_url.value,
      category: event.target.category.value,
      rating: event.target.rating.value,
      difficulty: event.target.difficulty.value,
      cook_time: event.target.cook_time.value,
      ingredients: event.target.ingredients.value,
      directions: event.target.directions.value
    }
    event.target.reset()

    let reqPack = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newRecipe)
    }
    fetch(BASE_URL, reqPack)
      .then(resp => resp.json())
      .then((newRecipeData) => {
        this.setState({
          recipes: [...this.state.recipes, newRecipeData],
          rating: null,
          difficulty: null
        })
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
      sortFilter: "none"
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
          {/* <nav>
            <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/NewRecipeForm">Add New Recipe</Link></li>  
            </ul>
          </nav> */}

          <ChakraProvider>
            <NavbarContainer page={this.state.page} />
            {this.state.page === "home"
              ? <Flex m="6">
                <FilterContainer ingredients={this.state.ingredients} handleSort={this.handleSort} sortFilter={this.state.sortFilter} handleDifficultySelect={this.handleDifficultySelect} handleCategorySelect={this.handleCategorySelect} search={this.state.search} handleSearch={this.handleSearch} recipes={this.filter()} />
                <Spacer />

                {/* Original code where recipes render on localhost:3000/recipes */}
                <Route exact path="/"> <Home /> </Route>

                <Route path="/recipes" render={(routerProps) =>
                  <RecipeContainer deleteRecipe={this.deleteRecipe} chooseRecipe={this.chooseRecipe} recipeContainerUnmounted={this.recipeContainerUnmounted} recipes={this.filter()} {...routerProps} />} />


                {/* <Route exact path="/" render={(routerProps) =>
                  <RecipeContainer showRecipeDetails={this.showRecipeDetails} recipes={this.filter()} {...routerProps} />} />
  
                  <Route path="/recipes" render={(routerProps) =>
                  <RecipeShowPage recipes={this.filter()} {...routerProps} />} /> */}
              </Flex>
              : null




            }
            <Route path='/NewRecipeForm' render={(routerProps) =>

              <NewRecipeForm ingredients={this.state.ingredients} formState={this.state} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} handlePageChange={this.handlePageChange} {...routerProps} />} />

            <Route path='/EditRecipeForm' render={(routerProps) =>

              <EditRecipeForm updateRecipe={this.updateRecipe} {...this.state.chosenRecipe} handlePageChange={this.handlePageChange} {...routerProps} />} />
          </ChakraProvider>




        </div>
      </Router>

    );
  }
}


export default App; 