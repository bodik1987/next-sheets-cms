"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import ThemeToggle from "./ui/theme-toggle";

const Header = () => {
  const [scrollUp, setScrollUp] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previousScrollY: number | undefined = scrollY.getPrevious();
    if (previousScrollY && latest > previousScrollY) {
      setScrollUp(false);
    } else {
      setScrollUp(true);
    }
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [active]);

  return (
    <>
      <header
        className={`p-4 bg-gray-300/50 dark:bg-white/5 border-b border-b-gray-50/30 backdrop-blur-xl sticky top-0 transition-all z-30 ${
          !scrollUp && "-translate-y-[110%]"
        }`}
      >
        <section className="wrapper flex justify-between items-center text-[min(4vw,20px)]">
          <Link href="/" className="inline-flex gap-2 items-center">
            Назва
          </Link>

          <nav className="space-x-2 md:space-x-6 flex items-center">
            <ThemeToggle />
            <button
              title="Burger"
              onClick={() => setActive(!active)}
              className="md:hidden z-50"
            >
              <Burger />
            </button>
          </nav>
        </section>
      </header>

      {/* Burger */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setActive(false)}
            className="md:hidden bg-white dark:bg-black fixed inset-0 z-40"
          >
            <button
              onClick={() => setActive(!active)}
              className="w-9 h-9 p-2 fixed top-5 right-6 rounded-full overflow-hidden bg-black/20 dark:bg-white/20 items-center justify-center"
            >
              <Close />
            </button>

            <nav className="flex flex-col items-end px-8 pt-[120px] gap-14 font-bold text-[20px]">
              <Link onClick={() => setActive(false)} href="#footer">
                Контакти
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

function Burger({ active = false }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        className={`${
          active
            ? "stroke-black dark:stroke-white"
            : "stroke-black dark:stroke-white"
        }`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Close({ active = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`${
        active ? "fill-black dark:fill-white" : "fill-black dark:fill-white"
      }`}
    >
      <path d="m12.12 10 4.07-4.06a1.5 1.5 0 1 0-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 1 0-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0L10 12.12l4.06 4.07a1.45 1.45 0 0 0 1.06.44 1.5 1.5 0 0 0 1.06-2.56Z" />
    </svg>
  );
}
