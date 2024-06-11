import sql from "better-sqlite3";
import { error } from "console";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw Error("Fetching failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug: any) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw Error("Fetching failed");
  return db.prepare("SELECT * FROM meals where slug = ?").get(slug);
}
