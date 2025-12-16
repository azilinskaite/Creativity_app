import {defineQuery} from "groq";

export const getAllDisciplinesQuery = defineQuery(`
  *[_type == "disciplines"]{
    ...,
    "image": mainImage.asset->url
  }
`);
