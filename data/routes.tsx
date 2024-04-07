import { VscOpenPreview } from "react-icons/vsc";
import { GoFileCode } from "react-icons/go";
import { MdFileDownload } from "react-icons/md";
import { FaLink } from "react-icons/fa";
const routes = [
  {
    name: "Introduction",
    layout: "/",
    path: "/",
    icon: <VscOpenPreview className="h-5 w-5 ml-0.5" />,
  },
  {
    name: "URLs Security",
    layout: "/dashboard",
    path: "security",
    icon: <FaLink className="h-4 w-4 ml-[3.5px]" />,
    secondary: true,
  },
  {
    name: "Code Security",
    layout: "/dashboard",
    icon: <GoFileCode className="h-5 w-5 ml-0.5" />,
    path: "leak",
  },

];

export default routes;
