import { client } from "@/app/lib/sanity"

export async function getProductsData(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0] {
    _id,
      images,
      price,
      name,
      description,
      'slug': slug.current,
      'categoryName': category -> name,
      price_id
  }`
  const data = await client.fetch(query)
  return data
}
