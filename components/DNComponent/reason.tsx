"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useThemeContext } from "@/providers/ThemeProvider";

export default function Experience() {
  const { ref } = useSectionInView("Reason");
  const { theme, setTheme } = useThemeContext()

  return (
    <section id="reason" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Why do we need this?</SectionHeading>
      <VerticalTimeline lineColor="#9ca3af">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                boxShadow: theme === "light" ? "0 3px 4px rgba(0, 0, 0, 0.1)" : "0 4px 6px rgba(255, 255, 255, 0.1)",
                border: "2px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                borderRadius: "10px",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
