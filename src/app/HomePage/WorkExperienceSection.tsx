import { CardContainer, CardHeader } from "@/components/Card"
import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import classnames from "classnames"
import { BiSolidStar } from "react-icons/bi"
import { FaAngleRight } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"

const experienceList = [
  {
    id: "123",
    role: "Senior Full-Stack Developer",
    location: "Berlin, Germany",
    company: "Gavel GmbH",
    logo: "/gavel.jpeg",
    dates: {
      from: "2023-04-01",
      to: "2023-01-01",
    },
    responsibilities: [
      "Next.js Developement",
      "ReactNative development of gavel mobile app",
      "Code Reviews",
      "Contributing to design discussions",
      "Contributing to app architecture",
      "DevOps with GithubActions + Detox automation",
    ],
    summary: "",
  },
  {
    id: "456",
    logo: "/comatch.jpeg",
    location: "Berlin, Germany",
    role: "Senior Front-end Developer",
    company: "Comatch GmbH",
    dates: {
      from: "2023-04-01",
      to: "2023-01-01",
    },
    responsibilities: [
      "React.js Development",
      "Collaborating with design & Product Managers for refinement",
      "Code Reviews & Mentorship",
      "Automating deployments for Design System / web app (CircleCI)",
      "Company-wide front-end architecture",
      "Maintaining high impact internal app for sales & customer teams",
    ],
    summary: "",
  },
  {
    id: "213",
    role: "Front-end Developer",
    location: "New York (Remote)",
    logo: "/climb.jpeg",
    company: "Climb Credit",
    dates: {
      from: "2023-04-01",
      to: "2023-01-01",
    },
    responsibilities: [
      "Next.js Developement",
      "ReactNative development of gavel mobile app",
      "Code Reviews",
      "Contributing to design discussions",
      "Contributing to app architecture",
      "DevOps setup with GithubActions and automated testing for ReactNative with Detox",
    ],
    summary: "",
  },
  {
    id: "112",
    role: "Front-end Developer",
    location: "Bangalore, India",
    logo: "/agara.jpeg",
    company: "Agara Labs",
    dates: {
      from: "2023-04-01",
      to: "2023-01-01",
    },
    responsibilities: [
      "Next.js Developement",
      "ReactNative development of gavel mobile app",
      "Code Reviews",
      "Contributing to design discussions",
      "Contributing to app architecture",
      "DevOps setup with GithubActions and automated testing for ReactNative with Detox",
    ],
    summary: "",
  },
  {
    id: "412",
    role: "Full-stack Developer",
    location: "Bangalore, India",
    logo: "/sugoi.jpeg",
    company: "Sugoi Labs",
    dates: {
      from: "2023-04-01",
      to: "2023-01-01",
    },
    responsibilities: [
      "Next.js Developement",
      "ReactNative development of gavel mobile app",
      "Code Reviews",
      "Contributing to design discussions",
      "Contributing to app architecture",
      "DevOps setup with GithubActions and automated testing for ReactNative with Detox",
    ],
    summary: "",
  },
  {
    id: "4122",
    role: "Software Internship",
    location: "Online",
    logo: "/chingu.jpeg",
    company: "Chingu Voyage",
    dates: {
      from: "2019-09-01",
      to: "2023-11-01",
    },
    responsibilities: [
      "Next.js Developement",
      "ReactNative development of gavel mobile app",
      "Code Reviews",
      "Contributing to design discussions",
      "Contributing to app architecture",
      "DevOps setup with GithubActions and automated testing for ReactNative with Detox",
    ],
    summary: "",
  },
]

const Overlay = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      className="z-modal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
    ></motion.div>
  )
}

const formatDate = (date: string) =>
  Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(date))

const WorkExperienceItem = ({
  company,
  role,
  id,
  logo,
  selectItem,
  responsibilities,
  location,
  dates,
  isOpen = false,
}: (typeof experienceList)[0] & {
  selectItem: (arg: string | null) => void
  isOpen?: boolean
}) => {
  const handleShowMore = () => (isOpen ? selectItem(null) : selectItem(id))
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isOpen) {
      setShowDetails(true)
    } else {
      setShowDetails(false)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <div
      onClick={() => (isOpen ? null : handleShowMore())}
      className={classnames(
        "max-sm:w-11/12 flex-1 min-w-fit cursor-pointer drop-shadow-lg z-1",
        isOpen
          ? "-translate-y-2/4 -translate-x-2/4 fixed top-2/4 left-2/4 cursor-default z-modal"
          : ""
      )}
    >
      <motion.div
        layoutId={id}
        layout
        initial={{
          opacity: 0,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        }}
        animate={{
          opacity: 1,
          translateY: isOpen ? "-50%" : "0%",
        }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        style={{ transition: "border 0.1s ease" }}
        className={`flex flex-col gap-2 items-start justify-center bg-[#0f0e0e] p-8 rounded-xl drop-shadow-lg flex-1 w-full flex-auto border ${
          isOpen
            ? "p-8 sm:w-fit border-neutral-800  hover:border-neutral-800"
            : "border-neutral-800 hover:border-neutral-600"
        }`}
      >
        <motion.div className="flex gap-3 justify-start items-center" layout>
          <motion.img
            layout
            src={logo}
            className="w-10 h-10 rounded-md border-1 border-zinc-400"
          />
          <motion.h2 className="text-md  text-gray-300 text-left" layout>
            {company}
            <small className="text-[0.7rem] font-light text-gray-300 block leading-[1.75]">
              {location}
            </small>
          </motion.h2>
        </motion.div>
        <motion.p
          layout
          className="text-[0.8rem] text-gray-400 font-light tracking-wider mt-2 leading-3"
        >
          {role}
        </motion.p>
        <motion.p
          layout
          className="text-[0.8rem] text-gray-400 font-light tracking-wider pt-0"
        >
          {formatDate(dates.from)} - {formatDate(dates.to)}
        </motion.p>

        <AnimatePresence>
          {isOpen && showDetails && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
              }}
              className="pt-2 mt-4 border-t-2  border-dotted border-zinc-800"
            >
              <motion.div className="text-lg font-medium text-white tracking-wider mt-4">
                Responsibilities
              </motion.div>
              <motion.ul layout className="mb-4 gap-3">
                {responsibilities.map((text, i) => {
                  return (
                    <motion.li
                      key={i}
                      className="text-white font-light tracking-wider sm:text-sm text-[0.75rem] mt-2 mb-1 max-w-prose bullet flex items-start"
                    >
                      <span className="inline-block text-yellow-500 mr-2 sm:mt-[5px] mt-[3px]">
                        <FaAngleRight size={10} />
                      </span>
                      <p>{text}</p>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.button
            aria-label="Exit detail view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className={classnames(
              "bg-red-500  text-white text-sm font-light px-2 py-1 text-center rounded-full absolute top-0 drop-shadow-md -translate-y-2/4 right-0 translate-x-2/4 w-[32px] h-[32px] flex items-center justify-center"
            )}
            onClick={() => handleShowMore()}
          >
            <span className="pointer-events-none w-fit h-fit flex m-auto">
              <RxCross2 size={20} />
            </span>
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}

const items = experienceList

const WorkExperienceSection = () => {
  const [selected, setSelected] = useState<null | string>(null)
  const selectedItem = items.find(
    (item) => item.id === selected
  ) as (typeof experienceList)[0]

  return (
    <CardContainer
      transition={{
        type: "spring",
        duration: 2,
        delay: 3,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className={
        "sm:w-2/4 w-full flex-1 flex-col w-autoflex-wrap items-center justify-start relative max-h-fit min-w-[280px] sm:min-w-[500px]"
      }
    >
      <CardHeader>Work Experience</CardHeader>
      <div className="flex flex-wrap gap-4 justify-center w-auto">
        {items
          .filter((item) => item.id !== selected)
          .map((item) => (
            <WorkExperienceItem
              {...item}
              isOpen={selected === item.id}
              key={item.id}
              selectItem={setSelected}
            />
          ))}
      </div>

      <AnimatePresence>
        {selected && <Overlay onClick={() => setSelected(null)} />}
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <WorkExperienceItem
            isOpen
            {...selectedItem}
            selectItem={setSelected}
          />
        )}
      </AnimatePresence>
    </CardContainer>
  )
}

export default WorkExperienceSection
