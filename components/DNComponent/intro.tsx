"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import CursorBlinker from "./cursor";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const textIndex = useMotionValue(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const texts = ["Let's see what we have built."];
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);
  useEffect(() => {
    animate(count, 180, {
      delay: 1.5,
      type: "tween",
      duration: 7,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[65rem] text-center sm:mb-0 scroll-mt-[100rem] h-[calc(80vh)] flex flex-col gap-8 justify-center"
    >
      <div className="flex w-full items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
            }}
          >
            <Image
              src="./KS.jpg"
              alt="Team photo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-[500px] w-full rounded-lg border-[0.25rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <span className="text-center mt-4 text-3xl">
          <span className="font-bold">Hello, We're Knowledge Seeker.</span> We're a{" "}
          <span className="font-bold">group of passionate student</span> with{" "}
          <span className="font-bold">2 years</span> studying in HCMUT. We enjoy
          building <span className="italic">wonderful things</span>.
          <br />
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0 }}
      >
        <div className="text-4xl">
          <motion.span className="font-semibold mt-4">{displayText}</motion.span>
          <CursorBlinker />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
        }}
      >
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
          }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
}

