"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";
import { classNames } from "../utils/classNames";

const GetStarted = () => (
  <section className={classNames(styles.paddings, "relative z-10")}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={classNames(
        styles.innerWidth,
        "mx-auto flex flex-col md:flex-row gap-8"
      )}
    >
      <motion.div
        variants={planetVariants("left")}
        className={classNames(styles.flexCenter, "flex-1 hidden md:flex")}
      >
        <Image
          src="/get-started.png"
          alt="get-started"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[30px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, idx) => (
            <StartSteps key={feature} number={idx + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
