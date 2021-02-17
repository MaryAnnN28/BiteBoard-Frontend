import React from 'react';
import { Select } from "@chakra-ui/react";

function DifficultySelect({ handleDifficultySelect }) {

    return (
        <Select placeholder="Difficulty" onChange={handleDifficultySelect}>
            <option value="Easy">Easy</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Difficult">Difficult</option>
        </Select>
    )
}

export default DifficultySelect;