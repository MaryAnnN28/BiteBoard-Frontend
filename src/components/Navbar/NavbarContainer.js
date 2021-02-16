import React from 'react';
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react"

function NavbarContainer() {
   return (
      <Flex m="6" border="1px" borderColor="gray.200" rounded="lg" p="5">
         <Box p="2">
            <Heading size="md">Welcome to AllBites!</Heading>
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