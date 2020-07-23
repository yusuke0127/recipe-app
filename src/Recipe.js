import React from 'react';
import style from './recipe.module.css'

const Recipe = ({recipe}) => {
  console.log(recipe);
  return(
    <div className={style.recipe}>
      <h1>{recipe.title}</h1>
      <p>{recipe.calories}</p>
      <img src={recipe.image} alt="" className={style.recipe}/>
      <ul>
      {recipe.ingredients.map(ingredient => (
      <li>{ingredient.text}</li>
      ))}
      </ul>
    </div>
  );
}

export default Recipe;
