import Image from "next/image";

import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]"
  const data = await client.fetch(query)
  return data
}

export default async function Hero() {
  const data = await getData()

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <section className="mb-8 flex flex-wrap justify-between md:mb-16">

        <article className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h2>
          <p className="max-w-md leading-relaxed text-gray-400 xl:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis sint nulla aperiam modi quibusdam sit maxime, qui eveniet delectus ipsum.</p>
        </article>

        <section className="mb-12 flex w-full h-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden shadow-xl  rounded-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()} alt="Main background image"
              priority
              width={500}
              height={500}
              className="object-cover object-center w-full h-full" />
          </div>
          <div className="overflow-hidden rounded-lg ">
            <Image
              src={urlFor(data.image2).url()} alt="Main background image"
              priority
              width={500}
              height={500}
              className="object-cover object-center w-full h-full" />
          </div>
        </section>

      </section>
    </section>
  )
}
