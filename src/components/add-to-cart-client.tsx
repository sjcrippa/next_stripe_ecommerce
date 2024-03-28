'use client'

import { useShoppingCart } from 'use-shopping-cart'

import { Button } from './ui/button'
import { urlFor } from '@/app/lib/sanity'
import { ProductImage } from '@/app/types/types'


export interface CartItems {
  name: string,
  description: string,
  price: number,
  currency: string,
  image: ProductImage
}


export default function AddToCartClient({ name, description, price, currency, image }: CartItems) {
  const { addItem, handleCartClick } = useShoppingCart()

  //console.log(typeof urlFor(image).url())

  const item = {
    name,
    description,
    price,
    image: urlFor(image).url(),
    currency,
    sku: 'product sku'
  }


  return (
    <Button onClick={() => {
      addItem(item)
      handleCartClick()
    }}>Add to cart</Button>
  )
}
