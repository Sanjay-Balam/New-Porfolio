"use client"

import { motion } from "framer-motion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", level: "Intermediate", description: "Procedural programming, Memory management" },
      { name: "C++", level: "Advanced", description: "Object-oriented programming, STL" },
      { name: "JavaScript", level: "Advanced", description: "ES6+, Async/Await, Promises" },
      { name: "TypeScript", level: "Advanced", description: "Type safety, Interfaces, Generics" },
      { name: "SQL", level: "Advanced", description: "Complex queries, Optimization" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Express", level: "Advanced", description: "API Development, Middleware, Routing" },
      { name: "Next.js", level: "Intermediate", description: "SSR, ISR, API Routes" },
      { name: "React.js", level: "Intermediate", description: "Hooks, Context API, Components" },
      { name: "Tailwind", level: "Intermediate", description: "Utility-first CSS, Responsive design" },
      { name: "ShadCN UI", level: "Intermediate", description: "Component library, Theming" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: "Advanced", description: "Document storage, Aggregation, Indexing" },
      { name: "PostgreSQL", level: "Intermediate", description: "Relational database, Complex queries" },
      { name: "MySQL", level: "Intermediate", description: "Transactions, Stored procedures" },
      { name: "Prisma ORM", level: "Intermediate", description: "Type-safe database access, Migrations" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", level: "Advanced", description: "Extensions, Debugging, Customization" },
      { name: "Git", level: "Advanced", description: "Version control, Branching strategies" },
      { name: "GitHub", level: "Advanced", description: "Collaboration, Pull requests, Actions" },
      { name: "Docker", level: "Intermediate", description: "Containerization, Docker Compose" },
      { name: "Postman", level: "Advanced", description: "API Testing, Documentation" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 md:py-24 lg:py-32 ml-20"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Technologies and tools I've worked with
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="mb-4 text-xl font-bold">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <HoverCard key={skill.name}>
                    <HoverCardTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="cursor-pointer rounded-full bg-muted px-3 py-1 text-sm font-medium"
                      >
                        {skill.name}
                      </motion.div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-semibold">{skill.name}</h4>
                        <span className="text-xs text-muted-foreground">{skill.level}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{skill.description}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 