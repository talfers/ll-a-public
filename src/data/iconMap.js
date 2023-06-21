import { FaRegHandshake } from "react-icons/fa";
import { IoHomeOutline, IoHelpCircleOutline, IoPersonOutline, IoMailOutline, IoExitOutline, IoNewspaperOutline, IoDocumentOutline, IoCopyOutline } from "react-icons/io5";
import { BsFileEarmarkWord, BsFiletypePdf, BsCheckCircle } from "react-icons/bs";

const iconMap = {
    'Home': <IoHomeOutline/>,
    'User': <IoPersonOutline/>,
    'Signout': <IoExitOutline/>,
    'Advertising': <IoNewspaperOutline/>,
    'Messages': <IoMailOutline/>,
    'Leases': <IoDocumentOutline/>,
    'Contracts': <FaRegHandshake/>,
    'Advice': <IoHelpCircleOutline/>,
    'Word': <BsFileEarmarkWord/>,
    'Pdf': <BsFiletypePdf/>,
    'Copy': <IoCopyOutline/>,
    'Check': <BsCheckCircle/>
}
export default iconMap;