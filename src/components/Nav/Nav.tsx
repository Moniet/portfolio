import React, { ReactNode } from "react"
import {
  FaAddressCard,
  FaCodepen,
  FaGithub,
  FaInbox,
  FaLinkedinIn,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa"
import { RiMailFill } from "react-icons/ri"

const Link = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a
      href={href}
      className="text-zinc-400 hover:text-zinc-600  tracking-widest text-sm sm:text-md px-4 border-dashed"
    >
      {children}
    </a>
  )
}

const Nav = () => {
  return (
    <div
      className="w-full sticky top-0 left-0 max-w-[900px] block mx-auto -z-1"
      style={{ zIndex: 0 }}
    >
      <nav className="h-full flex flex-col sm:flex-row gap-4 items-center w-full rounded-lg  py-8 px-4 text-neutral-400 justify-between">
        <div className="text-2xl font-bold">
          <h1
            className="tracking-wider text-zinc-900"
            // style={{ filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.2))" }}
          >
            Moniet Sawhney
          </h1>
        </div>
        <div className="flex divide-x items-center">
          <Link href="https://github.com/moniet">
            <FaGithub className="size-4 pointer-events-none" />
          </Link>
          <Link href="https://linkedin.com/in/moniet">
            <FaLinkedinIn className="size-4 pointer-events-none" />
          </Link>
          <Link href="https://codepen.io/moniet">
            <FaCodepen className="size-4 pointer-events-none" />
          </Link>
          <Link href="mailto:info@moniet.dev">
            <FaInbox className="size-4 pointer-events-none" />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
