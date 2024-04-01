'use client'

import Link from "next/link"
import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"
import { Button } from "./ui/button"
import { Trash, Trash2 } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function CartModal() {

  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    clearCart,
    redirectToCheckout
  } = useShoppingCart()

  async function handleCheckout(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log('error result ->', result.error);
      }
    } catch (error) {
      console.log('redirect error ->', error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Your shopping cart</SheetTitle>
        </SheetHeader>
        <section className="h-full flex flex-col justify-between text-white">
          <section className="mt-8 flex-1 overflow-y-auto">
            <ul className="divide-y divide-gray-500">
              {
                cartCount === 0
                  ? "You don't have any items added!"
                  : (
                    <>
                      {
                        Object.values(cartDetails ?? {}).map((item) => (
                          <li key={item.id} className="flex py-6 flex-cols">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-500">
                              <Link onClick={() => handleCartClick()} href={item.slug}>
                                <Image
                                  src={item.image as string}
                                  alt="Item image"
                                  width={100}
                                  height={100}
                                  className="items-center -translate-y-3"
                                />
                              </Link>
                            </div>
                            <section className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium">
                                  <h4 className="capitalize">{item.name}</h4>
                                  <p className="ml-4">${item.price}</p>
                                </div>
                                <p className="hidden  mt-1 text-sm md:line-clamp-2">{item.description}</p>
                              </div>
                              <div className="mt-3 md:mt-0 flex flex-1 items-center flex-col md:flex-row mx-auto md:mx-0 md:items-end md:justify-between text-sm">
                                <p className="text-gray-500">Quantity: {item.quantity}</p>
                                <div className="flex">
                                  <button
                                    onClick={() => removeItem(item.id)}
                                    type="button"
                                    className="mt-3 md:mt-0 font-medium text-primary hover:text-primary/80"
                                  >
                                    <Trash2 className="w-6 h-6" />
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
          </section>

          <section className="border-t border-gray-500 py-6">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-1 text-sm text-gray-300">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="hidden mt-2 md:flex justify-between items-center">
              <p>Clear all:</p>
              <Button
                onClick={() => clearCart()}
                className="">
                <Trash />
              </Button>
            </div>
            <div className="mt-6">
              <Button onClick={handleCheckout} className="w-full hover:bg-primary/80">Checkout</Button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-300">
              <p>Or {' '}
                <button
                  onClick={() => handleCartClick()}
                  className="font-semibold text-primary hover:text-primary/80">Continue shopping!</button>
              </p>
            </div>
          </section>
        </section>
      </SheetContent>
    </Sheet>
  )
}
