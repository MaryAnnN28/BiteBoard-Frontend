import React from "react";
import './App.css'; 
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
import RecipeShowPage from './components/Recipe/RecipeShowPage'; 
import { ChakraProvider, Flex, Spacer } from "@chakra-ui/react";


const BASE_URL = "http://localhost:3000/recipes/"

class App extends React.Component {

  state = {
    recipes: [],
    search: "",
    category: "",
    page: "home",
    name: "", 
    image_url: "", 
    rating: null, 
    difficulty: null, 
    cook_time: "", 
    ingredients: "", 
    directions: "", 
    chosenRecipe: []
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(recipeData => this.setState({
        recipes: recipeData
      }))
    
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filter = () => {
    let recipes = this.state.recipes;
    if (this.state.category !== "") {
      recipes = recipes.filter(recipe => recipe.category === this.state.category)
      return recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.search.toLowerCase()))
    } else {
      return this.state.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.search.toLowerCase()))
    }
  }

  handleCategorySelect = (e) => {
    this.setState({
      category: e.target.value
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
          recipes: [...this.state.recipes, newRecipeData]
      })
    })
  }

  // showRecipeDetails = () => {

  // }



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
            <NavbarContainer page={this.state.page}/>
            <Flex m="6">
              <FilterContainer handleCategorySelect={this.handleCategorySelect} search={this.state.search} handleSearch={this.handleSearch} recipes={this.filter()}/> 
              <Spacer />

        {/* Original code where recipes render on localhost:3000/recipes */}
                <Route exact path="/"> <Home /> </Route>

                <Route path="/recipes" render={(routerProps) =>
                <RecipeContainer recipes={this.filter()} {...routerProps} />} />
              
              
              {/* <Route exact path="/" render={(routerProps) =>
                <RecipeContainer showRecipeDetails={this.showRecipeDetails} recipes={this.filter()} {...routerProps} />} />

                <Route path="/recipes" render={(routerProps) =>
                <RecipeShowPage recipes={this.filter()} {...routerProps} />} /> */}
              

              

            </Flex>
          </ChakraProvider>
        
            <Route path='/NewRecipeForm' render={(routerProps) =>
            <NewRecipeForm formState={this.state} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} handlePageChange={this.handlePageChange} page={this.state.page} {...routerProps} />} />
          
            
   
        </div>
      </Router>

    );
  }
}


export default App; 