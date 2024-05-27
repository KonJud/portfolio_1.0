"use client"

import React from 'react';
import { motion } from "framer-motion"
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs
} from "react-icons/fa"
import {
    SiTypescript,
    SiMicrosoftsqlserver,
    SiTailwindcss,
    SiNextdotjs,
} from "react-icons/si"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BiLogoPostgresql } from "react-icons/bi"
import { TbSql } from "react-icons/tb"


// about data
const about={
    title:"About me",
    description:"I am a full stack developer with experience in building web applications using React, Node.js, and Express. I have a passion for learning and am always looking for new challenges to tackle. I am currently seeking new opportunities to grow and expand my skillset.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Eudes Djeya"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+225) 057 467 4044"
        },
        {
            fieldName: "Experience",
            fieldValue: "6+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Ivorian"
        },
        {
            fieldName: "Email",
            fieldValue: "djeya.j@gmail"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "French, English"
        },
    ]
}

// experience
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "I have 6+ years of experience in web development. I have worked on a variety of projects, from small websites to large web applications. I am comfortable working with both front-end and back-end technologies, and I am always looking for new challenges to tackle.",
    items: [
        {
            company: "KESCARS Assurance",
            position: "Full Stack Developer && Database Administrator",
            duration: "2024 January - Present",
        },
        {
            company: "Internation Training School",
            position: "Frontend Developer",
            duration: "2023 - 2024",
        },
        {
            company: "MonTicket",
            position: "Freelance Frontend Developer",
            duration: "Summer 2023  - 2024",
        },
    ]
}

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "I have a Bachelor's degree in Computer Science from the University of Abidjan. I have also completed several online courses in web development, including courses on React, Node.js, and Express.",
    items: [
        {
            institution: "EGEG Group",
            degree: "University of Technology diploma",
            duration: "2023",
        },
        {
            institution: "Ouezin Coulibaly Institute",
            degree: "University of Technology diploma",
            duration: "2018",
        },
    ]
}

// skills data
const skills = {
    title: "My skills",
    description: "I have experience working with a variety of technologies, including:",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript",
        },
        {
            icon: <FaReact />,
            name: "React.Js",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.Js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.Js",
        },
        {
            icon: <BiLogoPostgresql />,
            name: "PostgreSQL",
        },
        {
            icon: <SiMicrosoftsqlserver />,
            name: "SQL Server",
        },
        {
            icon: <TbSql />,
            name: "MySQL",
        },

    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.1,
                    duration: 0.5,
                    ease: "easeIn"
                }
            }}
            className={"min-h-[80vh] flex items-center justify-center py-12 xl:py-0"}
        >
            <div className={"container mx-auto"}>
                <Tabs
                    defaultValue={"experience"}
                    className={"flex flex-col xl:flex-row gap-[60px]"}
                >
                    <TabsList className={"flex flex-col w-full max-w-[380px] max-auto xl:mx-0 gap-6"}>
                        <TabsTrigger value={"experience"}>Experience</TabsTrigger>
                        <TabsTrigger value={"education"}>Education</TabsTrigger>
                        <TabsTrigger value={"skills"}>Skills</TabsTrigger>
                        <TabsTrigger value={"about"}>About me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className={"min-h-[70vh] w-full"}>
                        {/* experience */}
                        <TabsContent
                            value={"experience"}
                            className={"w-full"}
                        >
                            {"Experience"}
                        </TabsContent>

                        {/* education */}
                        <TabsContent
                            value={"education"}
                            className={"w-full"}
                        >
                            {"education"}
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent
                            value={"skills"}
                            className={"w-full"}
                        >
                            {"Skills"}
                        </TabsContent>

                        {/* About */}
                        <TabsContent
                            value={"about"}
                            className={"w-full"}
                        >
                            {"About me"}
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;