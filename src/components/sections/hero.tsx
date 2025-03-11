"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Head from "next/head"

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center py-12 md:py-24 lg:py-32"
      aria-label="Introduction"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Sanjay Balam
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              Software Engineer | Backend & Full-Stack Developer
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-[700px] text-center text-muted-foreground"
          >
            <p className="mt-4 text-lg">
              Hello, I&apos;m Sanjay. Undergraduate at CBIT, Hyderabad. I&apos;m a full-stack developer passionate about building dynamic and responsive web applications with expertise in React, Node.js, and TypeScript.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
} 