import { client } from "@/app/lib/sanity"
import { fullProduct } from "@/app/types/types"
import ImageGallery from "@/components/image-gallery"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

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
  const data: fullProduct = await getData(params.slug)

  return (
    <section className="mb-8 mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <ImageGallery images={data.images} />

        <div className="md:py-8">
          <div className="mb-2 mb:mb-3">
            <span className="mb-1 inline-block text-gray-300">
              {data.categoryName}
            </span>
            <h3 className="text-2xl font-bold text-gray-200 lg:text-3xl">
              {data.name}
            </h3>
          </div>

          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <Button className="rounded-full gap-x-3">
              <span>5.0</span>
              <Star className="h-6 w-6"/>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
