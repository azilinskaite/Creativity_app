import { client } from "@/sanity/lib/sanity.client";
import { getAllDisciplinesQuery } from "@/sanity/lib/queries";
import { GetAllDisciplinesQueryResult } from "../../sanity.types";

export async function getDisciplines(): Promise<GetAllDisciplinesQueryResult> {
  try {
    const data = await client.fetch<GetAllDisciplinesQueryResult>(getAllDisciplinesQuery, {}, {
      next: { revalidate: 60 },
    });
    return data;
  } catch (err) {
    console.error("Failed to fetch disciplines:", err);
    return [];
  }
}