'use client'

import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'

export default function AddToCartClient() {
  const { addItem, handleCartClick } = useShoppingCart()

  return (
    <Button>Add to cart</Button>
  )
}
