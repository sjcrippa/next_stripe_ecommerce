'use client'

import { useShoppingCart } from 'use-shopping-cart'

import { Button } from './ui/button'
import { urlFor } from '@/app/lib/sanity'
import { CartItems } from '@/app/types/types'

export default function Checkout({ id, name, description, price, currency, image, slug, price_id }: CartItems) {
  const { checkoutSingleItem } = useShoppingCart()

  function addItemCheckout(priceId: string) {
    checkoutSingleItem(priceId)
  }

  const item = {
    id,
    name,
    description,
    price,
    image: urlFor(image).url(),
    currency,
    slug,
    price_id
  }

  return (
    <Button variant={'secondary'} onClick={() => { addItemCheckout(item.price_id) }}>Checkout</Button>
  )
}
