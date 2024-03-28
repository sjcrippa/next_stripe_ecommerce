'use client'

import { urlFor } from "@/app/lib/sanity"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"

export default function CartModal() {
  const { cartCount, shouldDisplayCart, handleCartClick, cartDetails } = useShoppingCart()

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
                  : (
                    <>
                      {
                        Object.values(cartDetails ?? {}).map((entry) => (
                          <li key={entry.id} className="flex py-6 flex-col">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-500">
                              <Image
                                src={entry.image as string}
                                alt="Item image"
                                width={100}
                                height={100}
                              />
                            </div>
                            <h4 className="text-white">{entry.name}</h4>
                            <p>{entry.price}</p>
                            <p>{entry.description}</p>
                          </li>
                        ))
                      }
                    </>
                  )
              }
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
