import React from 'react';
import './Recipes.css';
import { Box } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';

function AddRecipeCard() {
    const history = useHistory();
    const handleClick = () => history.push('/NewRecipeForm');
    return (
        <Box onClick={handleClick}>
            <div className="add-card">
                <p className="add-card-text">+</p>
            </div>
        </Box>
    )
}

export default AddRecipeCard;