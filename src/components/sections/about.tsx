"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, User } from "lucide-react"

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-muted/40 py-12 md:py-24 lg:py-32 lg:pl-14 pr-20 sm:pr-18"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ml-12">About Me</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl ml-12">
              A passionate software developer with expertise in backend and full-stack development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-3 ml-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Personal Info</h3>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    I&apos;m a software developer based in India, passionate about building efficient and scalable applications.
                    I enjoy solving complex problems and continuously learning new technologies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <ul className="mt-2 space-y-2 text-center text-sm text-muted-foreground">
                    <li>
                      <p className="font-medium">Bachelor of Technology</p>
                      <p>Electronics & Communication Engineering</p>
                      <p className="text-xs">2020 - 2024</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Experience</h3>
                  <ul className="mt-2 space-y-2 text-center text-sm text-muted-foreground">
                    <li>
                      <p className="font-medium">Software Developer</p>
                      <p>Vectorsoft</p>
                      <p className="text-xs">Oct 2025 - Present</p>
                    </li>
                    <li>
                      <p className="font-medium">Software Developer Intern</p>
                      <p>Venkys.io</p>
                      <p className="text-xs">April - Sept 2024</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 