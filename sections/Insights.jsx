"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { insights } from "../constants";
import { classNames } from "../utils/classNames";

const Insights = () => (
  <section className={classNames(styles.paddings, "relative z-10")}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={classNames(styles.innerWidth, "mx-auto flex flex-col")}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverses" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, idx) => (
          <InsightCard key={`insign-${idx}`} {...insight} index={idx + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
