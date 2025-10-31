import {groq} from 'next-sanity'

export const getAllDisciplinesQuery = groq`*[_type == "disciplines"]{
  _id,
  title,
  description,
  color,
  "image": mainImage.asset->url,
  challenges[]->{
    _id,
    text
  }
}`