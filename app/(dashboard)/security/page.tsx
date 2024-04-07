import URLInput from "@/components/URLinput";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: 'HCMUT | Security',
}

const Security = () => {
    return (
        <div className="mt-5 grid min-h-[calc(100vh-126px)] grid-cols-1 gap-5">
            <URLInput />
        </div>
    );
};

export default Security;