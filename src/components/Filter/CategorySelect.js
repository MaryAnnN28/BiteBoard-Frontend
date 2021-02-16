import React, { useState } from 'react';
import { Select } from "@chakra-ui/react";

function CategorySelect({ recipes, handleCategorySelect }) {
    const [categories, setCategories] = useState([]);

    recipes.map(recipe => categories.includes(recipe.category) ? null : setCategories([...categories, recipe.category]))

    return (
        <Select placeholder="Category" onChange={handleCategorySelect}>
            {categories.map(category => <option value={category}>{category}</option>)}
        </Select>
    )
}

export default CategorySelect;