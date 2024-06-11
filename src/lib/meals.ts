import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";

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

export async function saveMeal(meals: any) {
  //   const slug = slugify(meals.title, { lower: true });
  //   const instructions: any = xss(meals.instructions);

  meals.slug = slugify(meals.title, { lower: true });
  meals.instructions = xss(meals.instructions);

  const extension = meals.image.name.split(".").pop();
  const FileName = `${meals.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${FileName}`);
  const bufferImage = await meals.image.arrayBuffer();
  stream.write(Buffer.from(bufferImage), (error) => {
    if (error) {
      throw new Error("IMAGE Wrong");
    }
  });

  meals.image = `/images/${FileName}`;

  db.prepare(
    `INSERT into meals ( slug,title,image,summary,instructions,creator,creator_email)
  VALUES ( @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email)
  `
  ).run(meals);
}
