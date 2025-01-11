import { CardContainer, CardHeader } from "@/components/Card"
import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "motion/react"
import classnames from "classnames"
import { BiBriefcase, BiCodeAlt, BiSolidStar } from "react-icons/bi"
import {
  FaAngleRight,
  FaBriefcase,
  FaLaptop,
  FaLaptopCode,
} from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { animate, stagger } from "motion"

const experienceList = [
  {
    id: "instaapply",
    role: "Founder & Full-Stack Developer",
    location: "",
    company: "InstaApply",
    logo: "/instaapply-logo.png",
    dates: {
      from: "2023-11-01",
      to: "Present",
    },
    responsibilities: [
      "Lead full-stack development & maintenance of chrome extension and website, achieving 100% uptime",
      "Implemented SEO strategy that increased traffic by 10 times, with long tail keywords and on-page optimization",
      "Researched & improved UX using DataDog + Clarity analytics, increasing landing page conversions by 30%",
    ],
    summary: "",
  },
  {
    id: "gavel",
    role: "Senior Full-Stack Developer",
    location: "",
    company: "Gavel GmbH",
    logo: "/gavel.jpeg",
    dates: {
      from: "2023-03-01",
      to: "2023-09-01",
    },
    responsibilities: [
      "Lead Web and Mobile app development, implemented realtime APIs supporting 20K+ daily users with 99% uptime",
      "Played a major role in product pivot, implementing complex interactions & animations for React Native application",
      "Helped build Wordpress plugin which integrated Gavel's realtime bidding / selling application on WP websites",
    ],
    summary: "",
  },
  {
    id: "comatch",
    role: "Senior Front-end Engineer",
    location: "",
    company: "Comatch",
    logo: "/comatch.jpeg",
    dates: {
      from: "2021-11-01",
      to: "2023-02-01",
    },
    responsibilities: [
      "Lead front-end development as part of the Contact team, provided mentorship & conducted detailed code reviews",
      "Maintained company design system; introduced CI/CD automation with completely nullified conflicts & improved DX",
      "Spearheaded changes company's front-end architecture while upgrading React (16-18); improved velocity by 2x",
    ],
    summary: "",
  },
  {
    id: "climb-credit",
    role: "Front-end Engineer",
    location: "",
    company: "Climb Credit",
    logo: "/climb.jpeg",
    dates: {
      from: "2021-01-01",
      to: "2021-10-01",
    },
    responsibilities: [
      "Lead the development of the student loan application which processed millions of dollars of revenue in the first month",
      "Integrated legacy 3rd party fin-tech APIs, modified source code to integrated it seamlessly with React",
      "Introduced architecture patterns using Styled Components which improved front-end development velocity",
    ],
    summary: "",
  },
  {
    id: "agara-labs",
    role: "Front-end Developer",
    location: "",
    company: "Agara Labs",
    logo: "/agara.jpeg",
    dates: {
      from: "2020-03-01",
      to: "2021-01-01",
    },
    responsibilities: [
      "Ownership of data-viz dashboard which helped customers understand how our AI was resolving customer-care issues",
      "Visualizing millions of data-points with React & D3.js for large clients like Johnson & Johnson and P&G group",
      "Maintained legacy front-ends using React, SASS and BEM methology",
    ],
    summary: "",
  },
  {
    id: "sugoi-labs",
    role: "Full-stack Developer (front-end focus)",
    location: "",
    company: "Sugoi Labs",
    logo: "/sugoi.jpeg",
    dates: {
      from: "2023-11-01",
      to: "Present",
    },
    responsibilities: [
      "Developed & Designed Full-Stack JavaScript + React Native apps for customers; delivered client MVPs in 1 month",
      "Took product ownership as well as the front-end for company tool. Implemented complex state logic with Redux",
      "Took ownership of maintaining AWS EC2 instances as well as integrating Amazon Rekognition AI into client MVPs",
    ],
    summary: "",
  },
  {
    id: "chingu",
    role: "Internship",
    location: "",
    company: "Chingu Labs",
    logo: "/chingu.jpeg",
    dates: {
      from: "2020-08-01",
      to: "2020-11-01",
    },
    responsibilities: [
      "Developed & Designed Full-Stack JavaScript + React Native apps for customers; delivered client MVPs in 1 month",
      "Took product ownership as well as the front-end for company tool. Implemented complex state logic with Redux",
      "Took ownership of maintaining AWS EC2 instances as well as integrating Amazon Rekognition AI into client MVPs",
    ],
    summary: "",
  },
]

const formatDate = (date: string) =>
  date.toLowerCase().includes("present")
    ? "Present"
    : Intl.DateTimeFormat("en", {
        month: "short",
        year: "numeric",
      }).format(new Date(date))

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
        backgroundColor: "rgba(55,55,55,0.5)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  )
}

// ... (formatDate function remains the same)

const fadeIn = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 2,
    },
  },
}

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
  className = "",
}: (typeof experienceList)[0] & {
  selectItem: (arg: string | null) => void
  isOpen?: boolean
  className?: string
}) => {
  const handleShowMore = () => (isOpen ? selectItem(null) : selectItem(id))
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowDetails(true)
    } else {
      setShowDetails(false)
    }
  }, [isOpen])

  return (
    <motion.div
      onClick={() => (isOpen ? null : handleShowMore())}
      className={classnames(
        "max-sm:w-11/12 flex-1 cursor-pointer z-1",
        isOpen
          ? "-translate-y-2/4 -translate-x-2/4 fixed top-2/4 left-2/4 cursor-default z-modal md:w-[500px]"
          : "min-w-fit",
        className
      )}
    >
      <motion.div
        layoutId={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, translateY: isOpen ? "-50%" : "0%" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        style={{
          transition: "border 0.3s ease, box-shadow 0.2s ease",
        }}
        className={`flex flex-col gap-2 items-start justify-center p-4 rounded-lg flex-1 w-full border ${
          isOpen
            ? "p-8 bg-zinc-100 sm:w-fit border-zinc-200 shadow-lg"
            : "border-zinc-200 bg-zinc-100 hover:border-zinc-400 h-full [box-shadow:0px_3px_0px] text-zinc-200 hover:text-zinc-400 hover:[box-shadow:0px_5px_0px]"
        }`}
      >
        <motion.div className="flex gap-2 justify-start items-center" layout>
          <motion.img
            layout
            src={logo}
            className="w-7 h-7 aspect-square rounded-md border border-zinc-200"
          />
          <motion.h2 className="text-md  text-zinc-900 text-left" layout>
            {company}
            <small className="text-[0.7rem] backdrop:before: text-zinc-900 block leading-[1.75]">
              {location}
            </small>
          </motion.h2>
        </motion.div>
        <motion.p
          layout
          className="text-[0.8rem] text-zinc-900 tracking-wider leading-0 whitespace-nowrap overflow-visible"
        >
          {role}
        </motion.p>
        <motion.p
          layout
          className="text-[0.8rem] text-zinc-900 tracking-wider -mt-2"
        >
          {formatDate(dates.from)} - {formatDate(dates.to)}
        </motion.p>

        <AnimatePresence>
          {isOpen && showDetails && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-2 mt-4 border-t-2  border-dotted border-zinc-400"
            >
              <motion.div className="text-lg font-medium text-zinc-900 tracking-wider mt-4">
                Responsibilities
              </motion.div>
              <motion.ul layout className="mb-4 gap-3">
                {responsibilities.map((text, i) => {
                  return (
                    <motion.li
                      key={i}
                      className="text-zinc-900 font-light tracking-wider sm:text-sm text-[0.75rem] mt-2 mb-1 max-w-prose bullet flex items-start"
                    >
                      <span className="inline-block text-yellow-600 mr-2 sm:mt-[5px] mt-[3px]">
                        <FaAngleRight size={10} />
                      </span>
                      <p className="whitespace-pre-line">{text}</p>
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
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={classnames(
              "bg-red-500  text-red-200 text-sm font-light px-2 py-1 text-center rounded-full absolute top-0 -translate-y-2/4 right-0 translate-x-2/4 w-[32px] h-[32px] flex items-center justify-center"
            )}
            onClick={() => handleShowMore()}
          >
            <span className="pointer-events-none w-fit h-fit flex m-auto">
              <RxCross2 size={20} />
            </span>
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  )
}

const items = experienceList

const WorkExperienceSection = () => {
  const [selected, setSelected] = useState<null | string>(null)
  const selectedItem = items.find(
    (item) => item.id === selected
  ) as (typeof experienceList)[0]

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 1, once: true })

  useEffect(() => {
    if (inView)
      animate(
        ".work-experience-item",
        { y: [10, 0], opacity: [0, 1] },
        { delay: stagger(0.12) }
      )
  }, [inView])

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
      {/* <CardHeader className="mb-3">Work Experience</CardHeader>
       */}

      <CardContainer className="flex w-full mx-auto max-w-[600px]">
        <CardHeader className="m-auto flex items-center justify-center gap-3 py-2 rounded-xl w-fit text-center mx-auto text-zinc-900 text-xl font-medium">
          <span className="text-zinc-900">
            <FaLaptop size={20} />
          </span>
          <span className="text-zinc-900 drop-shadow-lg">Work Experience</span>
        </CardHeader>
      </CardContainer>
      <div
        className="flex flex-wrap gap-4 justify-center w-auto mt-5 max-w-[600px] rounded-xl"
        ref={ref}
      >
        {items
          .filter((item) => item.id !== selected)
          .map((item) => (
            <WorkExperienceItem
              {...item}
              className={`work-experience-item ${inView ? "" : "opacity-0"}`}
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
