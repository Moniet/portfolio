import { CardContainer, CardHeader } from "@/components/Card"
import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import classnames from "classnames"
import { BiSolidStar } from "react-icons/bi"
import { FaAngleRight } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"

const experienceList = [
  {
    id: "1234",
    role: "Founder",
    location: "Remote",
    company: "InstaApply",
    logo: "/instaapply-logo.png",
    dates: {
      from: "2023-11-01",
      to: "Present",
    },
    responsibilities: [
      "Leading end-to-end product development from ideation to deployment",
      "Conducting comprehensive user research to shape product roadmap",
      "Spearheading UX/UI design decisions and creating high-fidelity mockups in Figma",
      "Implementing core product features using modern React.js patterns",
      "Managing full software development lifecycle as sole developer",
      "Building and maintaining product infrastructure on AWS",
    ],
    summary: "",
  },
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
      "Developed and maintained complex React Native mobile applications",
      "Implemented pixel-perfect UI components from Figma designs",
      "Led implementation of automated testing with Detox for React Native",
      "Architected and built scalable Next.js front-end solutions",
      "Conducted thorough code reviews and provided mentorship to junior developers",
      "Collaborated on technical architecture decisions for greenfield projects",
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
      "Engineered high-performance React components from Figma specifications",
      "Implemented comprehensive testing strategy using Cypress",
      "Established CI/CD pipelines using CircleCI for automated deployments",
      "Led code review processes and mentored junior team members",
      "Contributed to architectural decisions for front-end infrastructure",
      "Optimized application performance and developer experience",
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
      "Collaborated with UX team to implement and improve user interfaces",
      "Built responsive React applications from Figma designs",
      "Integrated complex payment processing systems and third-party APIs",
      "Participated in design reviews and provided technical feedback",
      "Improved front-end performance and accessibility",
      "Maintained high code quality through thorough testing and documentation",
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
      "Created interactive data visualizations using D3.js",
      "Built responsive layouts using BEM CSS methodology",
      "Implemented state management solutions with React and Redux",
      "Developed RESTful API integrations for front-end applications",
      "Converted Zeplin designs into pixel-perfect React components",
      "Optimized application performance and bundle size",
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
      "Developed cross-platform applications using React and React Native",
      "Architected and deployed applications on AWS infrastructure (S3/EC2/CloudFront)",
      "Built scalable REST APIs using Node.js and MongoDB",
      "Implemented responsive designs from Figma specifications",
      "Managed full-stack feature development from design to deployment",
      "Optimized cloud infrastructure for cost and performance",
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
      "Collaborated in an agile team environment on full-stack applications",
      "Developed and maintained REST APIs using Node.js and MongoDB",
      "Created user interface designs using Adobe XD",
      "Built responsive React components and integrated with backend services",
      "Participated in code reviews and team planning sessions",
      "Gained experience with git workflow and collaborative development",
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
        backgroundColor: "rgba(25,25,25,0.8)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  )
}

// ... (formatDate function remains the same)

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
    if (isOpen) {
      setShowDetails(true)
    } else {
      setShowDetails(false)
    }
  }, [isOpen])

  return (
    <div
      onClick={() => (isOpen ? null : handleShowMore())}
      className={classnames(
        "max-sm:w-11/12 flex-1 cursor-pointer drop-shadow-lg z-1",
        isOpen
          ? "-translate-y-2/4 -translate-x-2/4 fixed top-2/4 left-2/4 cursor-default z-modal md:w-[500px]"
          : "min-w-fit"
      )}
    >
      <motion.div
        layoutId={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, translateY: isOpen ? "-50%" : "0%" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        style={{ transition: "border 0.1s ease" }}
        className={`flex flex-col gap-2 items-start justify-center bg-[#0f0e0e] p-8 rounded-xl drop-shadow-lg flex-1 w-full border ${
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
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
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
      <div className="flex flex-wrap gap-4 justify-center w-auto pt-4">
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
