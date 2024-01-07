"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageAnimation({ children }: React.PropsWithChildren) {
  const key = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        key={key}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
