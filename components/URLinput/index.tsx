"use client"
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import NotiPopup from '../notification';
import { IoIosLink } from "react-icons/io";
import { motion } from 'framer-motion';
import { MdOutlineLink } from "react-icons/md";
const URLInput = ({ }) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setUrl(e.target.value);
    };

    const handleDrop = (e: { preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; }) => {
        e.preventDefault();
        const droppedUrl = e.dataTransfer.getData('text');
        setUrl(droppedUrl);
    };

    const handleDragOver = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    const handleCheck = async () => {
        if (url) { }
        else {
            setMessage("Please input URL to check security.")
            setError(true)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='w-full h-full bg-white p-4 rounded-xl shadow-md dark:!bg-navy-800 flex flex-col gap-4'>
            {error && <NotiPopup onClose={() => setError(false)} message={message} />}
            <div className='relative'>
                <IoIosLink className={`absolute top-1/2 -translate-y-1/2 left-3  w-5 h-5 ${url ? "text-black dark:text-white" : "text-gray-500"}`} />
                <input
                    type="text"
                    value={url}
                    onChange={handleInputChange}
                    placeholder="Paste or drop URL below"
                    className='w-full h-10 text-lg pr-2 pl-10 rounded-md focus:outline-none dark:!bg-navy-800 dark:text-white'
                ></input>
            </div>

            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className='flex flex-col items-center justify-center gap-1 text-lg px-2 mx-2 grow outline-dashed dark:outline-gray-600 outline-gray-300 text-gray-500 dark:text-gray-400 rounded-xl'
            >
                <MdOutlineLink className='text-4xl' />
                Drop URL here
            </div>
            <div className='w-full h-12 rounded-md overflow-clip text-white bg-blue-500 dark:bg-[#032B91] hover:cursor-pointer flex' >
                <Button className='w-full h-full text-lg' onClick={handleCheck}>Check URL</Button>
            </div>
        </motion.div>
    );
};

export default URLInput;
