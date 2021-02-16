import React from "react";
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, 
  // Switch, 
  Link
} from "react-router-dom";

import Home from './components/Home';
import NavbarContainer from './components/Navbar/NavbarContainer'; 
import RecipeContainer from './components/Recipe/RecipeContainer'; 
import FilterContainer from './components/Filter/FilterContainer'; 
import NewRecipeForm from './components/Recipe/NewRecipeForm'; 
import { ChakraProvider, Flex, Spacer } from "@chakra-ui/react";


const BASE_URL = "http://localhost:3000/recipes"
// const RECIPE_URL = "http://localhost:3000/recipes/1"

class App extends React.Component {

  state = {
    recipes: [],
    search: ""
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
    return this.state.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/NewRecipeForm">Add New Recipe</Link></li>  
            </ul>
          </nav>

          <NavbarContainer />
          <ChakraProvider>
            <Flex m="4">
              <FilterContainer search={this.state.search} handleSearch={this.handleSearch}/> 
              <Spacer />
                <Route exact path="/"> <Home /> </Route>

                <Route path="/recipes" render={(routerProps) =>
                  <RecipeContainer recipes={this.filter()} {...routerProps} />} />
            </Flex>
          </ChakraProvider>
        
            <Route path='/NewRecipeForm' render={(routerProps) =>
              <NewRecipeForm {...routerProps} />} />
   
        </div>
      </Router>

    );
  }
}


export default App; 