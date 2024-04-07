"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Problem");

  return (
    <motion.section
      ref={ref}
      className="flex flex-col justify-center mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28 h-[70vh]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="problem"
    >
      <SectionHeading><p className="text-4xl">The Problem</p></SectionHeading>
      <div className="flex flex-col justify-center text-xl">
        <p className="mb-3">
          After studying in school for 2 years{" "}, have coded a lot of projects, assignments, we realize that
          we usually face critical challenge in ensuring the security of our source code. One prevalent issue is {" "}
          <span className="font-medium">the susceptibility of user information </span> to exploitation by malicious actors.
          Hackers continuously probe for weaknesses in applications, seeking to exploit vulnerabilities to gain unauthorized access to user data.
        </p>
        <p>
          <span className="italic">Addressing vulnerabilities </span> in user
          information requires attention to secure coding practices,
          robust authentication mechanisms, and comprehensive security testing.
        </p>
        <p>
        </p>
      </div>
    </motion.section>
  );
}
