'use client'

import { ReactNode } from "react";
import { CartProvider as ShoppingCartProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {

  return (
    <ShoppingCartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://localhost:3000/success"
      cancelUrl="https://localhost:3000/error"
      currency="usd"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </ShoppingCartProvider>
  )
}
