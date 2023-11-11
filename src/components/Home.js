import React from 'react'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import me from "../assets/profilepic.png";

const Home = () => {

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        }
    }
    return (
        <div id='home'>

            <section>
                <div>


                    <motion.h1
                        {...animations.h1}
                    >
                        Hi, I Am Ashok
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["A Web Developer", "A Coder", "A Data Analyst"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "typewriterpara"
                    }} />

                    <div>
                        <a href="mailto:ashok.1@iitj.ac.in">
                            Hire Me
                        </a>
                        <a href="#work">
                            Projects <BsArrowUpRight />
                        </a>
                    </div>

                </div>
            </section>
            <section>
                <img src={me} alt="Ashok img" />
            </section>
            <BsChevronDown />

        </div>
    )
}

export default Home
