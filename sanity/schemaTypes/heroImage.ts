import { defineField, defineType } from 'sanity'

export const heroImageType = defineType({
  name: 'heroImage',
  type: 'document',
  title: 'Hero Images',
  fields: [
    defineField({
      name: 'image1',
      type: 'image',
      title: 'First image'
    }),
    defineField({
      name: 'image2',
      type: 'image',
      title: 'Second image'
    })
  ]
})
