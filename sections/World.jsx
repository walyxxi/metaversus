"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { classNames } from "../utils/classNames";

const World = () => (
  <section className={classNames(styles.paddings, "relative z-10")}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={classNames(styles.innerWidth, "mx-auto flex flex-col")}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title="Track friends around you and invite them to play together in the same world"
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <img
          loading="lazy"
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute shadow-lg shadow-gray-400 bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            loading="lazy"
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute shadow-lg shadow-gray-400 top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            loading="lazy"
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute shadow-lg shadow-gray-400 top-1/2 right-1/2 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            loading="lazy"
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
