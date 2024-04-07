import Dropzone from "@/components/dropzone";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'HCMUT | Leak',
}
const CheckLeak = () => {


    return (
        <div className="mt-5 grid min-h-[calc(100vh-126px)] grid-cols-1 gap-5">
            <Dropzone className={'p-2 grow w-full'} />
        </div>
    );
};

export default CheckLeak;
