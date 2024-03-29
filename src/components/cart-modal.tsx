'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"

export default function CartModal() {
  const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem } = useShoppingCart()

  console.log('log cartDetails ->',cartDetails);

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Your shopping cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-row justify-between text-white">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="divide-y divide-red-500">
              {
                cartCount === 0
                  ? "You don't have any items added!"
                  : (
                    <>
                      {
                        Object.values(cartDetails ?? {}).map((item) => (
                          <li key={item.id} className="flex py-6 flex-cols">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-500">
                              <Image
                                src={item.image as string}
                                alt="Item image"
                                width={100}
                                height={100}
                                className="object-cover object-center"
                              />
                            </div>
                            <section className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium">
                                  <h4>{item.name}</h4>
                                  <p className="ml-4">${item.price}</p>
                                </div>
                                <p className="mt-1 text-sm line-clamp-2">{item.description}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Quantity: {item.quantity}</p>
                                <div className="flex">
                                  <button
                                    onClick={ () => removeItem(item.id)}
                                    type="button"
                                    className="font-medium text-primary hover:text-primary/80"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </section>
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
