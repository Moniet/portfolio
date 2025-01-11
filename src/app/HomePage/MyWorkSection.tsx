import { CardContainer, CardHeader } from "@/components/Card"
import React, { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"

const projects = [
  {
    banner:
      "https://pub-bee551b1560648b0a179631450d9adaa.r2.dev/ficus/ficus-og.png",
    title: "ficus.fm",
    summary: "An app for infinite lo-fi/ambient music streaming",
    url: "https://www.ficus.fm",
  },
  {
    banner:
      "https://pub-b7c7de69b6d641409d911c7e3fe4734f.r2.dev/instaapply-og.jpg",
    title: "InstaApply",
    summary: "Suite of tools making job hunting way easier!",
    url: "https://www.instaapply.co",
  },
  {
    banner: "/blocs.png",
    title: "Blocs Widgets",
    summary: "Notion widgets for habit tracking",
    url: "https://blocs.me",
  },
  {
    banner: "/noise.webp",
    title: "ReactNoise",
    summary: "React lib for noisy textures",
    url: "https://github.com/Moniet/react-noise",
  },
  {
    banner: "/framerlib.png",
    title: "FramerLib",
    summary: "Code Components for Framer",
    url: "https://framerlib.com",
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
    <a href={url} className="w-full mx-auto sticky top-10 left-0 max-w-[500px]">
      <div
        className="flex flex-col border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50 border-b-4 hover:border-zinc-400"
        style={{ transition: "border-color 0.3s ease" }}
      >
        <div className="p-4">
          <div className="rounded-md overflow-hidden w-full h-auto sm:h-[250px] border border-zinc-200">
            <Image
              alt={`Visual for ${title} project : ${summary}`}
              width={1920}
              height={1080}
              className="w-full h-auto object-covers "
              src={banner}
            />
          </div>
        </div>
        <div className="flex flex-col pl-5 pb-4">
          <p className="text-zinc-900 text-sm tracking-wider">{title}</p>
          <p className="text-xs text-zinc-900 tracking-wide">{summary}</p>
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
      <CardHeader className="mb-5 mt-2">Notable Projects</CardHeader>
      <motion.div
        className="gap-4 flex-1 flex flex-col place-items-center"
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
