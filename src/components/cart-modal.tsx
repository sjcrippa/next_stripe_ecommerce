'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"

export default function CartModal() {
  const { cartCount, shouldDisplayCart, handleCartClick } = useShoppingCart()

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Your shopping cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between text-white">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="divide-y divide-red-500">
              {
                cartCount === 0
                  ? '0 items'
                  : 'X items'
              }
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
