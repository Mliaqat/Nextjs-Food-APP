"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export default async function handleForm(formData: any) {
  const mealsData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    name: formData.get("name"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(mealsData);
  redirect("/meals");
}
