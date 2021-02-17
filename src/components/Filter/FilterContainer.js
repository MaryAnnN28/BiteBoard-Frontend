import React from 'react';
import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import CategorySelect from './CategorySelect';
import DifficultySelect from './DifficultySelect';


class FilterContainer extends React.Component {
   render() {
      const { search, handleSearch, recipes, handleCategorySelect, handleDifficultySelect } = this.props
      return (
            <Box w="20%">
               <InputGroup>
                  <InputLeftAddon children={<SearchIcon/>}/>
                  <Input placeholder="search" value={search} onChange={handleSearch}/>
               </InputGroup>
               <CategorySelect handleCategorySelect={handleCategorySelect} recipes={recipes}/>
               <DifficultySelect handleDifficultySelect={handleDifficultySelect}/>
            </Box>
      )
   }
}

export default FilterContainer; 