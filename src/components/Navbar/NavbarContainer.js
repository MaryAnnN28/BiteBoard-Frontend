import React from 'react';
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';

function NavbarContainer({page}) {
   const history = useHistory();
   const handleClick = () => history.push('/recipes');
   return (
      <Flex m="6" border="1px" borderColor="gray.200" rounded="lg" p="5">
         <Box p="2">
            {page === "home" ? 
            <Heading size="md">Welcome to AllBites!</Heading> 
            :<Heading onClick={handleClick} size="md">Explore</Heading>
            }
         </Box>
         <Spacer />
         <Box>
            <Button colorScheme="green" mr="4">Log in</Button>
            <Button colorScheme="green">
               Sign Up
            </Button>
         </Box>
      </Flex>
   )
}

export default NavbarContainer; 