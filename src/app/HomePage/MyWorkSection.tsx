import { CardContainer } from "@/components/Card"
import React, { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    banner: "/blocs-dark.png",
    title: "Blocs Widgets",
    summary: "Notion widgets for habit tracking",
    url: "https://blocs.me",
  },
  {
    banner: "/framerlib.png",
    title: "FramerLib",
    summary: "Code Components for Framer",
    url: "https://framerlib.com",
  },
  {
    banner: "/techjobs.png",
    title: "TechJobMarkt",
    summary: "A site for finding tech jobs in germany",
    url: "https://techjobmarkt.de",
  },
  {
    banner: "/phoenix.png",
    title: "Phoenix Medical Systems",
    summary: "Website + Tina CMS for Medical Company",
    url: "https://phoenixmedicalsystems.com",
  },
]

type WorkItem = (typeof projects)[0]

const WorkItem = ({ banner, title, summary, url }: WorkItem) => {
  return (
    <a href={url} className="flex-auto">
      <div className="flex flex-col border border-zinc-800 rounded-xl h-full overflow-hidden bg-[#0f0e0e]">
        <div className="p-4 rounded-md overflow-hidden">
          <img className="w-full h-32 object-cover rounded-xl" src={banner} />
        </div>
        <div className="flex flex-col pl-5 pb-4">
          <p className="text-gray-300 text-sm tracking-wider">{title}</p>
          <p className="text-sm text-gray-500 text-light tracking-wide">
            {summary}
          </p>
        </div>
      </div>
    </a>
  )
}

const MyWorkSection = () => {
  const [selectedItem, setSelectedItem] = useState<null | WorkItem>(null)

  return (
    <CardContainer
      layout
      className="flex-col flex-1 flex-wrap gap-4 min-w-[300px] sm:min-w-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 3.2, duration: 1 } }}
    >
      <h2 className="text-2xl font-medium text-gray-300 tracking-widest text-center my-8 uppercase">
        Notable Projects
      </h2>
      <motion.div
        className="flex gap-4 justify-center items-strech flex-wrap"
        layout
      >
        {projects.map((item, i) => (
          <WorkItem key={i} {...item} />
        ))}
      </motion.div>
    </CardContainer>
  )
}

export default MyWorkSection
