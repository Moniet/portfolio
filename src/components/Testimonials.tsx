"use client"

import { CardContainer, CardHeader } from "./Card"

const Testimonial = ({ className = "" }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${className}`}>
      <div
        className={`flex flex-col items-start justify-between border-b-4 border border-zinc-300 bg-zinc-100 p-6 text-zinc-900 text-base rounded-md transition-shadow duration-500`}
        // style={{ gridRow: "span 13" }}
      >
        <p className="italic lg:text-sm text-xs max-w-prose leading-5 opacity-70">
          "I can't recommend Moniet highly enough, he is a very conscientious
          self-starter, who was able to work closely with our product manager,
          designers, and other engineers to deliver an MVP of our student facing
          checkout experience."
        </p>
        <div className="flex gap-2 mt-5 items-center">
          <div className="w-[40px] rounded-full aspect-square bg-zinc-800"></div>
          <div>
            <p className="text-sm italic font-light">David Cheung</p>
            <p className="text-xs">Lead Engineer at Climb Credit</p>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col items-start justify-between border-b-4 border border-zinc-300 bg-zinc-100 p-6 text-zinc-900 text-base rounded-md transition-shadow duration-500`}
        // style={{ gridRow: "span 14" }}
      >
        <p className="italic lg:text-sm text-xs max-w-prose leading-5 opacity-70">
          "Moniet hit the ground running and made highly impactful contributions
          to the company's codebase in a matter of months. He is highly
          proactive and took the lead to transform our front-end codebase which
          improved output and DX to a high standard."
        </p>
        <div className="flex gap-2 mt-5 items-center">
          <div className="w-[40px] rounded-full aspect-square bg-zinc-800"></div>
          <div>
            <p className="text-sm italic font-light">Jonathan Lamb</p>
            <p className="text-xs">Engineering Manager at Comatch</p>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col items-start justify-between border-b-4 border border-zinc-300 bg-zinc-100 p-6 text-zinc-900 text-base rounded-md transition-shadow duration-500`}
        // style={{ gridRow: "span 14" }}
      >
        <p className="italic lg:text-sm text-xs max-w-prose leading-5 opacity-70">
          "During his tenure we found him to be a self-starter, hardworking and
          a highly committed team player with strong conceptual knowledge."
        </p>
        <div className="flex gap-2 mt-5 items-center">
          <div className="w-[40px] rounded-full aspect-square bg-zinc-800"></div>
          <div>
            <p className="text-sm italic font-light">Arjun Maheswaran</p>
            <p className="text-xs">CTO of Agara Labs</p>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col items-start justify-between border-b-4 border border-zinc-300 bg-zinc-100 p-6 text-zinc-900 text-base rounded-md transition-shadow duration-500`}
        // style={{
        //   gridRow: "span 16",
        // }}
      >
        <div className="max-sm:mx-auto">
          <p className="italic lg:text-sm text-xs max-w-prose leading-5 opacity-70">
            "Moniet helped us develop a robust front-end for our e-commerce
            experience. He not only develivered the front-end with clean code in
            a matter of weeks, but also made architecture improvements that
            boosted productivity for all the developers on-board. We are
            grateful for his contributions and could not recommmend him enough."
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <div className="w-[40px] rounded-full aspect-square bg-zinc-800"></div>
            <div>
              <p className="text-sm italic font-light">Mohit Yadav</p>
              <p className="text-xs">CTO of BoldCare</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col items-start justify-between border-b-4 border border-zinc-300 bg-zinc-100 p-6 text-zinc-900 text-base rounded-md transition-shadow duration-500`}
        // style={{
        //   gridColumn: "1",
        //   gridRow: "1 / span 16",
        // }}
      >
        <div className="max-sm:mx-auto">
          <p className="italic lg:text-sm text-xs max-w-prose leading-5 opacity-70">
            "Moniet was extremely fast with learning and delivering software on
            the Gavel team. As a startup we worked on several features, tech
            stacks, and verticals. Our stack included Wordpress, Next.js, React,
            and React Native apps to mention a few; Moniet was able to pick up
            the tech and deliver high quality results in a matter of weeks. We
            would love to work with him again!"
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <div className="w-[40px] rounded-full aspect-square bg-zinc-800"></div>
            <div>
              <p className="text-sm italic font-light">Florian Brauer</p>
              <p className="text-xs">CTO of Gavel GmbH</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-start justify-between border-b-4 border border-zinc-300 bg-zinc-100 p-6 text-zinc-900 text-base rounded-md transition-shadow duration-500`}
        // style={{ gridRow: "span 12" }}
      >
        <p className="italic lg:text-sm text-xs max-w-prose leading-5 opacity-70">
          "We found him sincere, hardworking, technically sound and result
          oriented during his/her tenure. ​Moniet Sawhney ​has a friendly,
          outgoing personality, a good sense of humor and works well as part of
          a team."
        </p>
        <div className="flex gap-2 mt-5 items-center">
          <div className="w-[40px] rounded-full aspect-square bg-zinc-800"></div>
          <div>
            <p className="text-sm italic font-light">Nayan Mittal</p>
            <p className="text-xs">CEO of Sugoi Labs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section>
      <CardContainer className="flex min-h-screen flex-col items-center justify-start p-10">
        <CardHeader>References</CardHeader>
        <div className="mb-5" />
        <Testimonial />
      </CardContainer>
    </section>
  )
}
