import React from "react"
import Link from "next/link"


import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, link: "https://github.com/KonJud"},
    {icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/eudes-djeya-870515243/"},
    {icon: <FaYoutube />, link: "https://www.youtube.com/channel/UC9KvdH38Z8CA5xfua274DyA"},
    {icon: <FaTwitter />, link: "https://x.com/deveuudes"}
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.link}
                        className={iconStyles}
                        target="_blank"
                    >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials