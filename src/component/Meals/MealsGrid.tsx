import React from "react";
import classes from "./meals.module.css";
import MealItem from "./MealsItems";

function MealsGrid({ meals }: any) {
  return (
    <ul className={classes.mealGrid}>
      {meals.map((meals: any, index: any) => (
        <li key={index}>
          <MealItem {...meals} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
