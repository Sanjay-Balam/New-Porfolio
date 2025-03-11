"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Paytm Web App",
    description: "Secure Money Transfer application inspired by Paytm, enabling secure transactions between users.",
    image: "/projects/paytm.jpg",
    alt: "Paytm Web App screenshot showing the user interface for money transfers",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    liveUrl: "https://paytm-frontend-steel.vercel.app/",
    githubUrl: "https://github.com/Sanjay-Balam/End-To-End-PayTM-app",
    period: "Jan-Feb 2024",
    features: [
      "User authentication and authorization with JWT-based security",
      "Secure payment processing between users",
      "React front-end for a smooth user experience",
      "Node.js and Express back-end handling transaction logic",
      "MongoDB for efficient data storage"
    ]
  },
  {
    title: "SAAS Platform",
    description: "SaaS platform enabling users to create and manage personalized song queues with streamlined functionality.",
    image: "/projects/saas.jpg",
    alt: "SAAS Platform screenshot showing the user interface for managing song queues",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OAuth"],
    liveUrl: "https://song-craft-gizq.vercel.app/",
    githubUrl: "https://github.com/Sanjay-Balam/SongCraft",
    period: "Apr-June 2024",
    features: [
      "OAuth via Google Authentication for secure login",
      "Personalized song queues with custom playlists",
      "Interactive voting system that prioritizes tracks based on popularity",
      "Playlist sharing capabilities fostering a community-driven music experience",
      "Responsive user interface designed for all devices"
    ]
  },
  {
    title: "Room Chat Application",
    description: "Real-time Room Chat Application using WebSockets, enabling seamless communication in dynamic chat rooms.",
    image: "/projects/chat.jpg",
    alt: "Room Chat Application screenshot showing the user interface for real-time chat",
    tags: ["React", "WebSockets", "Node.js", "Express", "TypeScript"],
    liveUrl: "https://room-chat.example.com",
    githubUrl: "https://github.com/Sanjay-Balam/Real-time-chat-app",
    period: "Aug-Sep 2024",
    features: [
      "Real-time messaging with WebSockets for low-latency interaction",
      "Dynamic chat rooms with unique IDs for user creation and joining",
      "Real-time messaging powered by WebSockets",
      "Express backend efficiently managing connections and room data",
      "Responsive, type-safe user interface with React"
    ]
  }
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-12 md:py-24 lg:py-32 pl-20"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Showcasing my work and technical expertise
          </p>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex justify-center"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.alt} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  </div>
                  <CardHeader className="text-center">
                    <div className="flex justify-between items-center mb-2">
                      <CardTitle>{project.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">{project.period}</span>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex flex-wrap justify-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-2">
                    <Button asChild variant="outline" size="sm" className="gap-1">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="gap-1">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 