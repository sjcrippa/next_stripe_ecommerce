import { Star, Truck } from "lucide-react"

import { client } from "@/app/lib/sanity"
import { FullProduct } from "@/app/types/types"
import { Button } from "@/components/ui/button"
import AddToCartClient from "@/components/add-to-cart-client"
import ImageGallery from "@/components/image-gallery"

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0] {
    _id,
      images,
      price,
      name,
      description,
      'slug': slug.current,
      'categoryName': category -> name
  }`
  const data = await client.fetch(query)
  return data
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const data: FullProduct = await getData(params.slug)
  
  return (
    <section className="mb-8 mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <ImageGallery images={data.images} />

        <div>
          <div className="mb-2 mb:mb-3">
            <span className="mb-1 inline-block text-gray-300">
              {data.categoryName}
            </span>
            <h3 className="text-2xl font-bold text-gray-200 lg:text-3xl capitalize">
              {data.name}
            </h3>
          </div>

          <div className="mb-6 flex items-center gap-3 md:mb-8">
            <Button className="rounded-full gap-x-3">
              <span>5.0</span>
              <Star className="h-6 w-6" />
            </Button>

            <span className="text-sm text-gray-500 transition duration-100">
              56 ratings
            </span>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold">
                ${data.price}
              </span>
              <span className="text-sm text-primary line-through">
                ${data.price + 30}
              </span>
            </div>

            <span className="text-sm text-gray-500">
              Shipping compañy
            </span>
          </div>

          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <Truck className="w-6 h-6" />
            <span>2 - 4 Day shipping</span>
          </div>

          <div className="flex gap-3">
            <AddToCartClient
              id={data._id}
              name={data.name}
              description={data.description}
              price={data.price}
              image={data.images[0]}
              currency="USD"
              slug={data.slug}
            />
            <Button variant={"secondary"}>Checkout now</Button>
          </div>

          <p className="mt-12 text-base text-gray-500 tracking-wide">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  )
}
