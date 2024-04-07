"use client"
import '@/app/globals.css'
import Contact from '@/components/DNComponent/contact';
import Header from '@/components/DNComponent/header';
import Intro from '@/components/DNComponent/intro';
import Problem from '@/components/DNComponent/problem';
import Projects from '@/components/DNComponent/projects';
import SectionDivider from '@/components/DNComponent/section-divider';
import Reason from '@/components/DNComponent/reason';
import Technologies from '@/components/DNComponent/technologies'
import FixedPlugin from '@/components/fixedPlugin/FixedPlugin';
import SidebarProvider from "@/providers/SidebarProvider";
import ActiveSectionContextProvider from '@/providers/active-section-context';
import { useEffect } from 'react';
const addSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Sử dụng scrollIntoView với behavior là 'smooth'
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
};
const RootStructure = ({
    children,
}: {
    children: React.ReactNode
}) => {
    useEffect(() => {
        addSmoothScroll();
    }, []);

    return (
        <>
            <SidebarProvider>
                <ActiveSectionContextProvider>
                    <section className="flex w-full">
                        {/* Navbar & Main Content */}
                        <Header />

                        <div className="w-full h-full dark:bg-navy-800">

                            {/* Main Content */}
                            <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
                            <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
                            <main className='flex flex-col items-center px-4flex-none transition-all mt-[110px] relative'>
                                <Intro />
                                <SectionDivider />
                                <Problem />
                                <SectionDivider />
                                <Reason />
                                <SectionDivider />
                                <Technologies />
                                <SectionDivider />
                                <Projects />
                                <Contact />
                            </main>
                        </div>
                        <FixedPlugin />
                    </section>
                </ActiveSectionContextProvider>
            </SidebarProvider>
        </>
    );
}

export default RootStructure;