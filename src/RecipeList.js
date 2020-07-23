import React from 'react'

const RecipeList = ({recipes}) => {
  return(
    <div>
      <h1>Recipe list</h1>
      <ul>
        {recipes.map(recipe => (
          <li>{recipe.recipe.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
