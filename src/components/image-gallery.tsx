'use client'

import Image from "next/image"
import { useState } from "react"

import { urlFor } from "@/app/lib/sanity"

interface Props {
  images: any
}

export default function ImageGallery({ images }: Props) {
  const [bigImage, setBigImage] = useState(images[0])

  const handleImage = (image: any) => {
    setBigImage(image)
  }

  return (
    <section className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {
          images.map((image: any, index: number) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                onClick={() => handleImage(image)}
                src={urlFor(image).url()}
                alt="Product image"
                width={200}
                height={200}
                className="h-full w-full object-cover object-center cursor-pointer"
              />
            </div>
          ))
        }
      </div>

      <div className="relative overflow-hidden rounded-lg lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt=""
          width={500}
          height={500}
          className="h-full w-full object-cover object-center" />
        <span className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1.5 uppercase tracking-wide text-white">
          sale
        </span>
      </div>
    </section>
  )
}
