import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'challenge',
  title: 'Challenge',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'prompt',
      title: 'Prompt',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'prompt',
    },
  },
})
