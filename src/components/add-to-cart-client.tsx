'use client'

import { useShoppingCart } from 'use-shopping-cart'

import { Button } from './ui/button'
import { urlFor } from '@/app/lib/sanity'


export interface CartItems {
  name: string,
  description: string,
  price: number,
  currency: string,
  image: any[],
}


export default function AddToCartClient({ name, description, price, currency, image }: CartItems) {
  const { addItem, handleCartClick } = useShoppingCart()

  //const imageUrl = image.length > 0 ? urlFor(image[0].asset._ref).url() : ''

  const item = {
    name,
    description,
    price,
    image: urlFor(image[0]).url(),
    currency,
    sku: 'asd'
  }

  return (
    <Button onClick={() => {
      addItem(item),
        handleCartClick()
    }}>Add to cart</Button>
  )
}
