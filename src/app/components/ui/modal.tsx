"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  modal: boolean;
  setModal: (value: boolean) => void;
  content: React.ReactNode;
};

export default function Modal({ modal, setModal, content }: Props) {
  useEffect(() => {
    if (modal) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [modal]);

  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => setModal(false)}
          className="fixed inset-0 flex items-start justify-center bg-black/10 backdrop-blur-md z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-10 max-h-[500px] flex flex-col items-center overflow-y-auto scroll_categories px-2 pt-2 pb-6 max-w-xs w-full bg-white dark:bg-white/20 rounded-3xl overflow-hidden shadow-2xl z-30"
          >
            <button
              onClick={() => setModal(false)}
              className="ml-auto w-9 h-9 shrink-0 rounded-full overflow-hidden bg-black/20 dark:bg-white/20 flex items-center justify-center relative"
            >
              <span className="w-4 h-[3px] rounded-md bg-white rotate-45"></span>
              <span className="absolute w-4 h-[3px] rounded-md bg-white -rotate-45"></span>
            </button>

            {content}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
