"use client";
import { motion } from "framer-motion";

const pVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.4,
  stiffness: 100,
  damping: 30,
  type: "tween",
};

export default function Article() {
  return (
    <article className="wrapper">
      <div className="min-h-[500px] h-full px-5 md:px-10 pt-10 pb-28 bg-black/10 dark:bg-[#313131]">
        <h2 className="leading-none mt-5">
          <span className=" text-black/50 dark:text-white/50">Текст. </span>
          Акцент на головних словах
        </h2>

        <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <motion.p
            variants={pVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ amount: 0.5 }}
            transition={transition}
            className="text-black/50 dark:text-[#939393]"
          >
            Lorem Ipsum is simply dummy text of the printing and{" "}
            <b>typesetting industry</b>. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of{" "}
            <b>type and scrambled it to make a type specimen book</b>.
          </motion.p>

          <motion.p
            variants={pVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ amount: 0.5 }}
            transition={transition}
            className="text-black/50 dark:text-[#939393]"
          >
            It has survived not only five centuries, but also the leap into
            electronic typesetting, <b>remaining essentially unchanged</b>. It
            was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like <b>Aldus PageMaker</b> including versions
            of Lorem Ipsum.
          </motion.p>

          <motion.p
            variants={pVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ amount: 0.5 }}
            transition={transition}
            className="text-black/50 dark:text-[#939393]"
          >
            Lorem Ipsum is simply dummy text of the printing and{" "}
            <b>typesetting industry</b>. Lorem Ipsum, when an unknown printer
            took a galley of type and scrambled it to make{" "}
            <b>a type specimen book</b>.
          </motion.p>
        </div>
      </div>
    </article>
  );
}
