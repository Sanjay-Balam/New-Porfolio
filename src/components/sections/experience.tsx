"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Vectorsoft",
    period: "Oct 2025 - Present",
    description: [
      "Coordinated with a team to develop and maintain a healthcare-related web application",
      "Focused on implementing dynamic features and resolving high-priority bugs",
      "Utilized Next.js, TypeScript, TailwindCSS, ShadCN UI, and React Forms",
      "Incorporated Atoms for efficient state management",
      "Collaborated with cross-functional teams to deliver high-quality software solutions"
    ]
  },
  {
    title: "Software Intern",
    company: "Venkys.io",
    period: "April - Sept 2024",
    description: [
      "Implemented REST APIs for backend services in Node.js projects",
      "Optimized request handling, improved response times, and ensured secure, scalable communication between system components",
      "Coordinated in a team of two to develop a VS Code extension that automates JDK downloads",
      "Added functionality to update environment variables by adding the bin path",
      "Gained experience with Git workflow and collaborative development"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-muted/40 py-12 md:py-24 lg:py-32 pl-16"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <Card className="h-full w-full">
                  <CardHeader className="text-center">
                    <CardTitle>{experience.title}</CardTitle>
                    <CardDescription>
                      {experience.company} | {experience.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                      {experience.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 