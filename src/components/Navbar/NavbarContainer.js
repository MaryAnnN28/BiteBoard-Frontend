import React from 'react';
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
import './Navbar.css';

function NavbarContainer({page}) {
   const history = useHistory();
   const handleClick = () => history.push('/recipes');
   return (
      // <div>
      <Flex m="6" border="1px" borderColor="gray.200" rounded="lg" p="10">
         <Box >
            {page === "home" ? 
            <Heading mt="2.5" pl="2" pb="2" size="md">Welcome to AllBites!</Heading> 
            // :<Heading  size="md">Explore All Recipes</Heading>
            : <Button size="lg" onClick={handleClick} colorScheme="green" variant="ghost">Explore All Recipes</Button>
            }
         </Box>
         <Spacer />
         <Box pt="1">
            <Button colorScheme="green" mr="4">Log in</Button>
            <Button colorScheme="green">
               Sign Up
            </Button>
         </Box>
      </Flex>


      
         /* <section class="masthead" role="img" aria-label="Image Description">
            <img src="qijin-xu.png" />
         <h1>
            The Hero Generator
         </h1>
            <button>
               When a hero comes along
            </button>
         </section>
      
      </div> */
    
   )
}

export default NavbarContainer; 