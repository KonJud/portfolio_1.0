"use client"

import React from 'react';

import {BsArrowDown, BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
    {
        num: "01",
        title: "Frontend Web Development",
        description: "I build websites that are fast, secure, and easy to manage. I use modern web technologies like React, Next.js, and Typescript.",
        href: ""
    },
    {
        num: "02",
        title: "Backend Web Development",
        description: "I build custom web applications that are scalable, secure, and easy to maintain. I use Node.js, Next.js, Prisma, PostgreSQL...",
        href: ""
    },
    {
        num: "03",
        title: "Database Administrator",
        description: "I design and maintain databases that are fast, secure, and easy to manage. I use PostgreSQL, MySQL, and SQLServer",
        href: ""
    },
    {
        num: "04",
        title: "Software Architect",
        description: "I design and build software systems that are scalable, secure, and easy to maintain. I use modern software architecture best practices.",
        href: ""
    }
]

const Services = () => {
    return (
        <section className={"min-h-[80vh] flex flex-col justify-center py-12 xl:py-10"}>
            <div className={"container mx-auto"}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: .2, duration: 0.5, ease: "easeIn"}
                    }}
                    className={"grid grid-cols-1 md:grid-cols-2 gap-[60px]"}
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className={"flex-1 flex flex-col justify-center gap-6 group"}
                            >
                                {/* top */}
                                <div className={"w-full flex justify-between items-center"}>
                                    <div className={"text-5xl font-extrabold text-transparent group-hover:text-outline-hover transition-all duration-500  text-outline"}>
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className={"w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "}
                                    >
                                        <BsArrowDownRight className={"text-primary text-3xl"}/>
                                    </Link>
                                </div>

                                {/* heading */}
                                <h2 className={"text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"}>
                                    {service.title}
                                </h2>

                                {/* description */}
                                <p className={"text-white/60"}>
                                    {service.description}
                                </p>

                                {/* border */}
                                <div className={"border-b border-white/20 w-full"}>

                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Services;