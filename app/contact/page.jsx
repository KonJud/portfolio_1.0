"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+225) 321 654 876"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "deveuudes@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Dokui, Abidjan, Ivory Coast"
    }
]

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.1,
                    duration: 0.5,
                    ease: "easeIn"
                }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Contact Form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">

                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl-justify-end order-1 xl:order-none mb-8 xl:mb-0">

                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact