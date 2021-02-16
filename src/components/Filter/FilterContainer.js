import React from 'react';
import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'


class FilterContainer extends React.Component {
   render() {
      const { search, handleSearch } = this.props
      return (
            <Box w="20%">
               <InputGroup>
                  <InputLeftAddon children={<SearchIcon/>}/>
                  <Input placeholder="search" value={search} onChange={handleSearch}/>
               </InputGroup>
            </Box>
      )
   }
}

export default FilterContainer; 