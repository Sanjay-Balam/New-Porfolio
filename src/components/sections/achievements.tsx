"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Code, Trophy } from "lucide-react"
import Link from "next/link"

const achievements = [
  {
    title: "LeetCode",
    icon: <Code className="h-6 w-6 text-primary" />,
    link: "https://leetcode.com/u/SANJAY_BALAM/",
    items: [
      "Solved 400+ DSA Problems",
      "Participated in weekly contests",
      "Proficient in Data Structures & Algorithms"
    ]
  },
  {
    title: "HackerRank",
    icon: <Trophy className="h-6 w-6 text-primary" />,
    link: "https://www.hackerrank.com/profile/b_sanjay0701",
    items: [
      "5-star rating in Problem Solving",
      "Achieved C++ certification",
      "Completed multiple coding challenges"
    ]
  },
  {
    title: "GeeksforGeeks",
    icon: <Award className="h-6 w-6 text-primary" />,
    link: "https://www.geeksforgeeks.org/user/sanjay0701/",
    items: [
      "Solved numerous DSA problems",
      "Contributed to the platform",
      "Improved algorithmic thinking skills"
    ]
  }
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="bg-muted/40 py-12 md:py-24 lg:py-32 lg:pl-24 sm:pl-4"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements & Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Recognition and accomplishments in the tech community
          </p>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <Card className="h-full w-full max-w-md">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      {achievement.icon}
                    </div>
                    <Link 
                      href={achievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                    </Link>
                    <ul className="mt-4 space-y-2 text-center text-sm text-muted-foreground">
                      {achievement.items.map((item, itemIndex) => (
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