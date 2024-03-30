import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Product'
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image' }]
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'name' }
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price'
    }),
    defineField({
      name: 'price_id',
      type: 'string',
      title: 'Stripe price ID'
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }]
    })
  ]
})
