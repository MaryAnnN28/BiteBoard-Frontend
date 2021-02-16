import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'


class FilterContainer extends React.Component {
   render() {
      const { search, handleSearch } = this.props
      return (
         <ChakraProvider>
            <Box w="25%">
               <InputGroup>
                  <InputLeftAddon children={<SearchIcon/>}/>
                  <Input placeholder="search" value={search} onChange={handleSearch}/>
               </InputGroup>
            </Box>
         </ChakraProvider>
      )
   }
}

export default FilterContainer; 