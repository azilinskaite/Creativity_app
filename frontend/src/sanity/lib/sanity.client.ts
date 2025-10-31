import {createClient} from "next-sanity";

export const client = createClient({
  projectId: "exhjl35f",
  dataset: "production",
  apiVersion: "2025-10-01",
  useCdn: false,
});