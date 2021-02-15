import React from 'react';
import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

class FilterContainer extends React.Component {
   render() {
      return (
         <Box w="25%">
            <InputGroup>
               <InputLeftAddon children={<SearchIcon/>}/>
               <Input placeholder="search" />
            </InputGroup>
         </Box>
      )
   }
}

export default FilterContainer; 