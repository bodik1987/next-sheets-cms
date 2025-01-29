"use client";

import {
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import {
  OptionsMenu,
  PrivateKey,
  RecoveryPhrase,
  RemoveWallet,
} from "../tray-content";

export default function Tray() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("options");

  const close = () => setIsOpen(false);

  const trayContent: Record<string, ReactNode> = {
    options: <OptionsMenu setContent={setContent} />,
    privateKey: <PrivateKey setContent={setContent} />,
    recovery: <RecoveryPhrase setContent={setContent} />,
    remove: <RemoveWallet setContent={setContent} />,
  };

  const controls = useDragControls();
  const dragY = useMotionValue(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open tray</button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-10 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="fixed bottom-4 inset-x-0 mx-auto w-[22rem] min-h-10 bg-neutral-50 px-6 pb-6 overflow-hidden z-20"
              style={{ borderRadius: 28, y: dragY }}
              initial={{ y: 336, scale: 0.6 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 500, scale: 1 }}
              transition={{
                duration: 0.05,
                ease: "easeInOut",
                type: "spring",
                mass: 0.2,
                damping: 10,
                stiffness: 100,
              }}
              layout
              drag="y"
              dragListener={false}
              dragControls={controls}
              dragConstraints={{
                top: 0,
                bottom: 0,
              }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={() => {
                if (dragY.get() >= 50) {
                  close();
                }
              }}
            >
              <div className="flex justify-between items-center pb-6 border-b-[1px] border-neutral-100">
                <h1 className="font-medium text-lg">Title</h1>
                <button
                  className="bg-gray-100 p-1 rounded-full"
                  onClick={close}
                >
                  X
                </button>
              </div>
              <button className="my-3 mx-auto flex justify-center">
                <motion.div
                  className="h-2 w-14 cursor-grab active:cursor-grabbing touch-none bg-gray-200"
                  style={{ borderRadius: 50 }}
                  key="drag-bar"
                  layout
                  onPointerDown={(e) => controls.start(e)}
                />
              </button>
              <motion.div
                key={content}
                layout="position"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  ease: "easeInOut",
                  type: "spring",
                  mass: 0.2,
                  damping: 10,
                  stiffness: 100,
                }}
              >
                {trayContent[content]}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
