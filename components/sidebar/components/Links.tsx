import React, { MouseEvent, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion, Variants } from "framer-motion";
import DashIcon from "@/components/icons/DashIcon";
import routes from "@/data/routes";

type Props = {
  onClickRoute?: (e: MouseEvent<HTMLElement>) => any | any
}

const linkVariants: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

export function SidebarLinks({ onClickRoute }: Props) {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [overviewRoutes, setOverviewRoutes] = useState(routes.filter((route: { name: string }) => route.name === "Introduction"));
  const [testingToolRoutes, setTestingToolRoutes] = useState(routes.filter((route: { name: string }) => route.name !== "Introduction"));

  const activeRoute = (routeName: string) => {
    return routeName === "/" ? pathname === "/" : pathname.includes(routeName);
  };

  const handleRouteClick = (index: number, e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    setActiveIndex(index);
    if (onClickRoute) {
      onClickRoute(e);
    }
  };

  const createLink = (route: any, index: number) => (
    <Link key={index} href={route.path} onClick={(e) => handleRouteClick(index, e)}>
      <motion.div
        variants={linkVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3, delay: 0.1 * index }}
        className="relative mb-3 flex hover:cursor-pointer"
      >
        <li
          className="my-[3px] flex cursor-pointer items-center px-8"
          key={index}
        >
          <span
            className={`${activeRoute(route.path) ? "font-bold text-navy-700 dark:text-white" : "font-medium text-gray-600"}`}
          >
            {route.icon ? route.icon : <DashIcon />}{" "}
          </span>
          <p
            className={`leading-1 ml-4 flex ${activeRoute(route.path) ? "font-bold text-navy-700 dark:text-white" : "font-medium text-gray-600"}`}
          >
            {route.name}
          </p>
        </li>
      </motion.div>
    </Link>
  );

  return (
    <>
      <div className="mb-4">
        <p className={`text-gray-600 font-semibold mb-2 pl-5`}>Overview</p>
        {overviewRoutes.map(createLink)}
      </div>
      <div>
        <p className={`text-gray-600 font-semibold mb-2 pl-5 pt-2`}>Testing Tools</p>
        {testingToolRoutes.map(createLink)}
      </div>
    </>
  );
}

export default SidebarLinks;
