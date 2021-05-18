import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';
import BiteBoardLogo from '../../images/bite_board_logo.jpeg'

function NavbarContainer() {
   const history = useHistory();
   const handleClick = () => history.push('/recipes');
   return (


      <div>
         <div className="logo">
            <img src={BiteBoardLogo} alt="bite-board-logo" />
         </div>
       
         
         <section class="masthead" role="img" aria-label="Image Description">
         
         <button class="home-btns" onClick={handleClick}>Explore All Recipes</button>
         </section>
      
      </div> 
    
   )
}

export default NavbarContainer; 