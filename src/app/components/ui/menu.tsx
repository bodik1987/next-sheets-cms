"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const menu = {
  open: {
    width: "280px",
    height: "auto",
    right: "0",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "40px",
    height: "40px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const button = {
  open: {
    width: "40px",
    height: "40px",
    right: "-16px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "40px",
    height: "40px",
    right: "224px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative w-[280px] p-4">
      <motion.button
        variants={button}
        animate={isActive ? "open" : "closed"}
        onClick={() => setIsActive(!isActive)}
        className="w-10 h-10 bg-red-600 rounded-full absolute z-10"
      ></motion.button>
      <motion.div
        className="bg-gray-200 dark:bg-[#0D0D0D] rounded-3xl relative select-none overflow-hidden"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
    </div>
  );
}

export const links = [
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Agency",
    href: "/",
  },
];

export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideIn = {
  initial: { opacity: 0, y: 20 },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

function Nav() {
  return (
    <div className="p-8">
      <div className="flex flex-col gap-4">
        {links.map((link, i) => {
          const { title } = link;
          return (
            <motion.a
              key={`b_${i}`}
              href={"#"}
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
