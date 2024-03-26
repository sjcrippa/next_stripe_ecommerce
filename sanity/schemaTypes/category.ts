import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category'
    })
  ]
})
