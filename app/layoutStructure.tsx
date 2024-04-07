"use client"
import { type Metadata } from 'next'
import './globals.css'
import "@/components/calendar/MiniCalendar.css";
import Image from 'next/image';
import { LoadScript } from '@react-google-maps/api';
const CustomLoadingElement = () => {
    return (
        <div className='w-full h-screen flex flex-col gap-4 justify-center place-items-center'>
            <Image src="/logo.ico" alt="Your image" width={50} height={50} />
            <span className='text-xl'>Fetching data...</span>
        </div>
    );
};
export default function layoutStructure({
    childrenProps,
}: {
    childrenProps: React.ReactNode
}) {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? ""} libraries={['places']} loadingElement={<CustomLoadingElement />}>
            {childrenProps}
        </LoadScript>
    )
}
