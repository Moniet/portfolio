import { CardContainer, CardHeader } from "@/components/Card"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    banner:
      "https://pub-b7c7de69b6d641409d911c7e3fe4734f.r2.dev/instaapply-og.jpg",
    title: "InstaApply",
    summary: "Suite of tools making job hunting way easier!",
    url: "https://www.instaapply.co",
  },
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
    <a href={url} className="flex-auto max-w-[300px]">
      <div className="flex flex-col border border-zinc-800 rounded-xl h-full overflow-hidden bg-[#0f0e0e]">
        <div className="p-4 rounded-md overflow-hidden ">
          <Image
            alt={`Visual for ${title} project : ${summary}`}
            width={1920}
            height={1080}
            className="w-full h-38 sm:h-32  object-cover rounded-xl border border-zinc-800 drop-shadow-lg"
            src={banner}
          />
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
      <CardHeader>Notable Projects</CardHeader>
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
