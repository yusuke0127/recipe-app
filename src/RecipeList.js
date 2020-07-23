import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({recipes}) => {
  return(
    <div className="recipes">
      <ul>
        {recipes.map(recipe => (
          <Recipe recipe={recipe.recipe} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
