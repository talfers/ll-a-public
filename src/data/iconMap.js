import { FaRegEnvelope, FaRegHandshake, FaRegNewspaper, FaRegQuestionCircle } from "react-icons/fa";
import { GrDocument, GrHome } from "react-icons/gr";

const iconMap = {
    'home': <GrHome/>,
    'advertising': <FaRegNewspaper/>,
    'messaging': <FaRegEnvelope/>,
    'leases': <GrDocument/>,
    'contracts': <FaRegHandshake/>,
    'advice': <FaRegQuestionCircle/>
}
export default iconMap;