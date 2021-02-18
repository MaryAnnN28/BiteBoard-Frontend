import React from 'react';
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';

function NavbarContainer({page}) {
   const history = useHistory();
   const handleClick = () => history.push('/recipes');
   return (
      <Flex m="6" border="1px" borderColor="gray.200" rounded="lg" p="5">
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
   )
}

export default NavbarContainer; 