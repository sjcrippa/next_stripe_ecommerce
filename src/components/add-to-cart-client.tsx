'use client'

import { useShoppingCart } from 'use-shopping-cart'

import { Button } from './ui/button'
import { urlFor } from '@/app/lib/sanity'
import { CartItems } from '@/app/types/types'

export default function AddToCartClient({ id, name, description, price, currency, image, slug }: CartItems) {
  const { addItem, handleCartClick } = useShoppingCart()

  const item = {
    id,
    name,
    description,
    price,
    image: urlFor(image).url(),
    currency,
    slug,
    sku: 'product sku',
  }

  return (
    <Button onClick={() => { addItem(item), handleCartClick() }}>Add to cart</Button>
  )
}
