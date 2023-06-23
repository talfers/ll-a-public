import { FaRegHandshake, FaMinus, FaPlus } from "react-icons/fa";
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
    'Check': <BsCheckCircle/>,
    'Minus': <FaMinus size={12}/>,
    'Plus': <FaPlus size={12}/>,
    // 'central_air_conditioning': ,
    // 'central_heating': ,
    // 'off_street_parking': ,
    // 'washer_and_dryer': ,
    // 'pool': ,
    // 'patio': ,
    // 'garage': ,
    // 'hardwood_floors': ,
}
export default iconMap;