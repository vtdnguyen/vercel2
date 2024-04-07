"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Contact() {
  const { ref } = useSectionInView("Demo");

  return (
    <motion.section
      id="demo"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>
        <Link href="/security">
          <Button className="mt-10 animate-bounce border-2 px-4 py-2 rounded-xl border-gray-900 font-semibold text-2xl shadow">
            View product
          </Button>
        </Link>
      </SectionHeading>
    </motion.section>
  );
}
