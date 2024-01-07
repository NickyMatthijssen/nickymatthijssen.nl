"use client";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const key = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      key={key}
    >
      <Navigation />

      <main>{children}</main>

      <Footer />
    </motion.div>
  );
}
