import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/component/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";

async function MealData() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meal is Created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam facere
          unde nesciunt nihil porro obcaecati dicta laboriosam placeat neque,
          sunt odio similique beatae totam pariatur. Recusandae, iste veniam?
          Illo, soluta.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share you are Favorite Recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className="loading">Loading.....</p>}>
          <MealData />
        </Suspense>
      </main>
    </>
  );
}
