"use client"
// Dropzone.tsx
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdClose } from 'react-icons/io';
import { GoFileCode } from 'react-icons/go';
import { BsCloudUpload } from 'react-icons/bs';
import { CiSaveDown2 } from 'react-icons/ci';
import { Button } from '@nextui-org/react';
import NotiPopup from '../notification';
import { motion } from 'framer-motion';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
interface DropzoneProps {
    className: string;
}

const Dropzone: React.FC<DropzoneProps> = ({ className }) => {
    const [error, setError] = useState(false);
    const [message, setMessage] = useState<string | JSX.Element>('');
    const [files, setFiles] = useState<{ file: File, preview: string }[]>([]);
    const [loading, setLoading] = useState(false);

    const onDrop = (acceptedFiles: File[]) => {
        const acceptedFile = acceptedFiles[0];
        if (!acceptedFile || !acceptedFile.name.endsWith('.js')) {
            setMessage('Please upload JavaScript file only.');
            setError(true);
            return;
        }

        // Create a preview URL for the file
        const filePreview = URL.createObjectURL(acceptedFile);

        // Update the state to store the file and its preview URL
        setFiles([{ file: acceptedFile, preview: filePreview }]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        //@ts-ignore
        accept: '.js',
        maxFiles: 1,
    });

    const removeFile = () => {
        setFiles([]);
    };

    const getFileIcon = (fileName: string) => {
        return <GoFileCode className="text-black w-10 h-10" />;
    };

    const handleSendFile = async () => {
        if (files.length !== 0) {
            try {
                // setLoading(true)
                // const formData = new FormData();

                // formData.append('file', files[0].file);
                // const response = await axios.post('http://localhost:5000/extension/check', formData);
                // if (response.data) {
                //     const { leak, warnings } = response.data;
                //     const leakagePercentage = leak * 100;
                //     const warningDetails = warnings.map((warning: { line: any; code: any; }, index: React.Key | null | undefined) => (
                //         <div key={index}>
                //             <p className='text-left pl-2'><b>{`Line ${warning.line}: `}</b>{`${warning.code}`}</p>
                //         </div>
                //     ));
                //     setMessage(
                //         <motion.div
                //             initial={{ opacity: 0, x: 20 }}
                //             animate={{ opacity: 1, x: 0 }}
                //             transition={{ duration: 0.5, delay: 0.3 }}
                //             className="w-full"
                //         >
                //             <div className='w-full flex h-60 justify-center place-items-center'>
                //                 <ReactApexChart
                //                     options={{
                //                         chart: {
                //                             type: 'pie',
                //                             dropShadow: {
                //                                 enabled: true,
                //                                 blur: 1,
                //                                 left: 1,
                //                                 top: 1
                //                             },
                //                             toolbar: {
                //                                 show: false
                //                             },
                //                             foreColor: '#333333'
                //                         },
                //                         colors: ['#4318FF', '#6AD2FF'],
                //                         labels: ['Leaked (%)', 'Safe (%)'],
                //                         stroke: {
                //                             show: true,
                //                             width: 2,
                //                             colors: ['transparent']
                //                         },
                //                         dataLabels: {
                //                             enabled: false
                //                         },
                //                         legend: {
                //                             position: 'bottom',
                //                             offsetY: 6
                //                         },
                //                         tooltip: {
                //                             enabled: true,
                //                             fillSeriesColor: false,
                //                             theme: 'light',
                //                             style: {
                //                                 fontSize: '12px'
                //                             },
                //                             x: {
                //                                 formatter: (val: any) => {
                //                                     return '';
                //                                 }
                //                             }
                //                         },
                //                         plotOptions: {
                //                             pie: {
                //                                 dataLabels: {
                //                                     offset: 0,
                //                                     minAngleToShowLabel: 10
                //                                 }
                //                             }
                //                         }
                //                     }}
                //                     series={[leakagePercentage, 100 - leakagePercentage]}
                //                     type="pie"
                //                     width="100%"
                //                 />
                //             </div>

                //             <div className="mt-4">
                //                 <p className="text-lg font-semibold">Warning Details:</p>
                //                 {warningDetails}
                //             </div>
                //         </motion.div>
                //     );
                //     setError(true);
                //     setLoading(false)
                // }
            } catch (error) {
                console.error('Error checking file:', error);
            }
        } else {
            setMessage("Please upload JavaScript file.");
            setError(true);
        }
    };

    return (
        <form className="w-full h-full flex justify-between gap-4 flex-col sm:flex-row">
            {error && <NotiPopup onClose={() => setError(false)} message={message} />}
            <motion.div
                {...getRootProps({
                    className: className
                })}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <input {...getInputProps({ name: 'file' })} />
                <div className="flex flex-col items-center justify-center gap-4 px-2 h-full w-full outline-dashed dark:outline-gray-400 outline-gray-500 text-gray-500 dark:text-gray-400 rounded-xl">
                    {isDragActive ? (
                        <div className="flex flex-col items-center justify-center gap-1">
                            <CiSaveDown2 className="text-3xl sm:text-5xl" />
                            <span className="text-md sm:text-xl">Drop file here</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-1">
                            <BsCloudUpload className="text-3xl sm:text-5xl" />
                            <span className="text-md sm:text-xl">Click to select or drag & drop</span>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Preview */}
            <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-navy-800 p-4 rounded-lg shadow-lg flex flex-col dark:text-white w-full sm:w-80"
            >
                <h2 className="title text-xl font-semibold whitespace-nowrap w-full text-center">Accepted file (.js)</h2>

                <ul className="mt-6 grid grow min-h-[100px]">
                    {files.map((file, index) => (
                        <li key={index} className="relative h-32 rounded-md px-2 border border-gray-300 flex flex-col justify-between">
                            <div className="grow flex justify-center place-items-center">{getFileIcon(file.file.name)}</div>
                            <button
                                type="button"
                                className="absolute right-2 top-2 bg-[#1488D8] dark:bg-[#032B91] pr-.5 flex h-6 w-6 place-items-center justify-center rounded-full hover:bg-gray-300 text-white"
                                onClick={removeFile}
                            >
                                <IoMdClose className="h-5 w-5" />
                            </button>
                            <div className="mt-1 text-[12px] font-medium whitespace-nowrap truncate text-center w-full dark:text-white">
                                {file.file.name}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="w-full h-10 rounded-md overflow-clip text-white bg-blue-500 dark:bg-[#032B91] hover:cursor-pointer flex">
                    {!loading ? <Button className="w-full h-full text-lg" onClick={handleSendFile}>Check file</Button> : <Button className="w-full h-full text-lg bg-gray-500">Checking file...</Button>}
                </div>
            </motion.section>
        </form>
    );
};

export default Dropzone;
