import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { ProductImage } from "../types/types";

export const client = createClient({
  projectId: 'lpy9lqu2',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true
})

const builder = ImageUrlBuilder(client)

/* console.log('log de imageUrlBuilder ->',ImageUrlBuilder);
console.log('log de client ->', client);
console.log('log de builder ->', builder);
 */
export function urlFor(source: ProductImage) {
  return builder.image(source)
}
