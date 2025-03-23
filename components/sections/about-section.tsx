"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/ui/section-heading"

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const skills = [
    "Python",
    "JavaScript (ES6+)",
    "React & React Native",
    "Next.js & Svelte",
    "Node.js & Flask",
    "Git & GitHub",
    "Firebase",
    "Google Cloud & AI APIs",
  ]

  return (
    <section ref={ref} id="about" className="py-20">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading title="About Me" subtitle="Discover my background, expertise, and what drives me" />

        <div className="space-y-8">
          <motion.div
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <span className="inline-block w-8 h-8 rounded-full bg-white text-black text-center leading-8 mr-3">
                👤
              </span>
              Who am I?
            </h3>
            <div className="space-y-4">
              <p className="text-white/70">
                I'm Aryan Mittal, a high school student passionate about computer science, technology, and finance. I founded
                Code4Hope, a non-profit dedicated to hosting hackathons that drive social innovation.
              </p>
              <p className="text-white/70">
                My expertise spans AI/ML, full-stack development, and cloud computing. I enjoy leveraging frameworks like React, Firebase,
                and Google Cloud to build impactful solutions that solve real-world problems.
              </p>
              <p className="text-white/70">
                Outside of programming, I'm actively involved in clubs like FCCLA and my school's FRC robotics team, constantly learning about economic theories,
                and working on new projects that merge technology with social good.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <span className="inline-block w-8 h-8 rounded-full bg-white text-black text-center leading-8 mr-3">
                💻
              </span>
              My Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center rounded-full px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-sm font-medium text-white/90">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <span className="inline-block w-8 h-8 rounded-full bg-white text-black text-center leading-8 mr-3">
                🪪
              </span>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center rounded-lg p-3 bg-white/5">
                <span className="text-white/60 mr-2">Email:</span>
                <span className="font-medium">aryan.raj.mittal@gmail.com</span>
              </div>
              <div className="flex items-center rounded-lg p-3 bg-white/5">
                <span className="text-white/60 mr-2">Location:</span>
                <span className="font-medium">Edison, New Jersey, USA</span>
              </div>
              <div className="flex items-center rounded-lg p-3 bg-white/5">
                <span className="text-white/60 mr-2">Languages:</span>
                <span className="font-medium">English, Spanish</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
export default AboutSection
