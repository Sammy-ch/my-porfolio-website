import React from "react";
import { motion } from "framer-motion";
import css3 from "../../public/images/skills/css.png";
import html5 from "../../public/images/skills/html.png";
import javascript from "../../public/images/skills/javascript.png";
import react from "../../public/images/skills/reactjs.png";
import node from "../../public/images/skills/nodejs.png";
import mongo from "../../public/images/skills/mongodb.png";
import nextjs from "../../public/images/skills/Nextjs.svg";
import tailwind from "../../public/images/skills/tailwind.png";
import wordpress from "../../public/images/skills/wordpress.svg";
import git from "../../public/images/skills/git.png";
import figma from "../../public/images/skills/figma.svg";
import Image from "next/image";

const Skill = ({  img, x, y, }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-transparent text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold  "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y,transition:{ duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <Image src={img} alt="logo" className="w-[100px] h-[50%] xl:w-[32px]" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold dark:text-light text-8xl mt-64 w-full text-center xl:text-6xl pb-5">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-transparent dark:bg-transparent
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]

      ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill img={css3} x="-20vw" y="15vw" />
        <Skill img={html5} x="-10vw" y="-16vw" />
        <Skill img={javascript} x="18vw" y="4vw" />
        <Skill img={react} x="0vw" y="18vw" />
        <Skill img={node} x="30vw" y="-8vw" />
        <Skill img={mongo} x="30vw" y="15vw" />
        <Skill img={nextjs} x="-30vw" y="-15vw" />
        <Skill img={tailwind} x="-30vw" y="0vw" />
        <Skill img={wordpress} x="10vw" y="-18vw" />
        <Skill img={figma} x="-15vw" y="-05vw" />
        <Skill img={git} x="15vw" y="17vw" />
      </div>
    </>
  );
};

export default Skills;
