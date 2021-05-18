import React from 'react';
import '../Recipe/Recipes.css'

function Sort({ handleSort, sortFilter }) {

    return (
      <div className="form-group">
        <label for="recipe-rating" className="col-form-label">Sort by:</label> 
        <div className="form-check">
            <input className="form-check-input" type="radio" name="sort" value="Cook Time"
            checked={sortFilter === "Cook Time"} 
            onChange={handleSort}
            />
          <label className="form-check-label" for="inlineRadio2">Cook Time</label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="sort" value="Rating"
            checked={sortFilter === "Rating"}
            onChange={handleSort}
            />
          <label className="form-check-label" for="inlineRadio2">Rating</label>
        </div>
      </div>
    )
}

export default Sort;