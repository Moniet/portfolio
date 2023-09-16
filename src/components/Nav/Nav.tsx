import React, { ReactNode } from "react"

const Link = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a
      href={href}
      className="text-neutral-400 hover:text-neutral-200 tracking-widest text-sm sm:text-md px-4 border-dashed"
    >
      {children}
    </a>
  )
}

const Nav = () => {
  return (
    <div className="w-full sticky top-0 left-0" style={{ zIndex: 0 }}>
      <nav className="h-full flex flex-col sm:flex-row gap-4 items-center w-full  mt-4 rounded-lg  py-8 px-4 text-neutral-400 justify-between">
        <div className="text-2xl text-gray-300 text-md">
          <h1
            className="leading-none tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-neutral-500"
            style={{ filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.2))" }}
          >
            Moniet Sawhney
          </h1>
        </div>
        <div className="flex divide-x">
          <Link href="https://github.com/moniet">Github</Link>
          <Link href="https://linkedin.com/in/moniet">LinkedIn</Link>
          <Link href="mailto:info@moniet.dev">Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
