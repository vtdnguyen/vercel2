'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { MdTipsAndUpdates } from "react-icons/md";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
} from "react-icons/io";
import Dropdown from "@/components/dropdown";

import routes from "@/data/routes";
import { useSidebarContext } from "@/providers/SidebarProvider";
import { useThemeContext } from "@/providers/ThemeProvider";
import { Button } from "@nextui-org/react"
import { TbBrandGithubFilled } from "react-icons/tb";
import { motion } from "framer-motion";

type Props = {
}

const Navbar = ({ }: Props) => {
  const [currentRoute, setCurrentRoute] = useState("Loading...");

  const pathname = usePathname()
  const { setOpenSidebar } = useSidebarContext()
  const { theme, setTheme } = useThemeContext()

  useEffect(() => {
    getActiveRoute(routes);
  }, [pathname]);

  const getActiveRoute = (routes: any) => {
    let activeRoute = "Introduction";
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="sticky top-4 z-40 flex flex-col md:flex-row md:justify-between h-full justify-start gap-4 flex-wrap items-center rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px] w-full md:w-[224px]">
        <div className="h-6 w-full pt-1 text-left">
          <Link className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white" href=" " >
            Home
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </Link>
          <Link className="text-sm font-bold capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white whitespace-nowrap" href="#" >
            {currentRoute}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link href="#" className="font-bold capitalize hover:text-navy-700 dark:hover:text-white whitespace-nowrap" >
            {currentRoute}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-full flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden" onClick={() => setOpenSidebar(true)} >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        <Link href="https://github.com/MinzNhat" target="_blank">
          <TbBrandGithubFilled className="h-4 w-4 text-gray-600 dark:text-white" />
        </Link>
        {/* start Notification
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[72%_0%] sm:origin-[78%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          className={"py-2 top-10 -left-[250px] sm:-left-[350px] md:-left-[450px] w-max"}
        >
          <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Notifications
              </p>
              <Button className="text-sm font-bold text-navy-700 dark:text-white hover:underline">
                Mark as Read
              </Button>
            </div>

            <Button className="flex w-full items-center">
              <div className="h-full w-[85px] hidden md:flex items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <MdTipsAndUpdates className="w-10 h-10 ml-2" />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm pl-2">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white w-full">
                  This feature is under development
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-white w-full truncate">
                  We will update and upgrade the system regularly
                </p>
              </div>
            </Button>
          </div>
        </Dropdown> */}

        {/* DARK MODE */}
        <div className="cursor-pointer text-gray-600"
          onClick={() => {
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }}
        >
          {theme === 'dark' ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>

        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full cursor-pointer"
              src={'/img/avatars/avatar4.png'}
              alt="Elon Musk"
            />
          }
          className={"py-2 top-8 -left-[180px] w-max"}
        >
          <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
            <div className="p-3.5">
              <div className="flex items-center flex-col gap-.5">
                <p className="text-sm font-normal text-navy-700 dark:text-white w-full text-left">Log in as</p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  nhat.dang2004.cv@gmail.com
                </p>{" "}
              </div>
            </div>
            <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

            <div className="flex flex-col pb-3 px-3">
              <Link href="/" className="mt-3 text-sm font-medium text-red-500 hover:text-red-500" >
                Sign out
              </Link>
            </div>
          </div>
        </Dropdown>

      </div>

    </motion.nav>
  );
};

export default Navbar;
