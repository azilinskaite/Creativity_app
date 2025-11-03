import { client } from "@/sanity/lib/sanity.client";
import { getAllDisciplinesQuery } from "@/sanity/lib/queries";
import type { Disciplines } from "../../sanity.types";

export async function getDisciplines(): Promise<Disciplines[]> {
  try {
    const data = await client.fetch<Disciplines[]>(getAllDisciplinesQuery, {}, {
      next: { revalidate: 60 },
    });
    return data;
  } catch (err) {
    console.error("Failed to fetch disciplines:", err);
    return [];
  }
}