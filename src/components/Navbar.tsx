'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";

const links = [
  { name: 'Home', href: '/' },
  { name: 'For Him', href: '/him' },
  { name: 'For Her', href: '/her' },
  { name: 'Fragrances', href: '/fragrances' }
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="mb-8 border-b py-2">
      <nav className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href='/'>
          <h1 className="text-4xl font-bold">Next
            <span className="text-primary">Commerce</span>
          </h1>
        </Link>

        <ul className="hidden gap-12 lg:flex 2xl:ml-16">
          {
            links.map((link, index) => (
              <section key={index}>
                {pathname === link.href ? (
                  <Link className="text-lg font-semibold text-primary" href={link.href}>{link.name}</Link>
                ) : (
                  <Link className="text-lg font-semibold text-white transition duration-100 hover:text-primary" href={link.href}>{link.name}</Link>
                )}
              </section>
            ))
          }
        </ul>

        <section className="flex divide-x border-r sm:border-l">
          <Button className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">Hey</Button>
        </section>
      </nav>
    </header>
  )
}
