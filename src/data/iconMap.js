import { FaRegEnvelope, FaRegHandshake, FaRegNewspaper, FaRegQuestionCircle } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";

const iconMap = {
    'advertising': <FaRegNewspaper/>,
    'messaging': <FaRegEnvelope/>,
    'leases': <GrDocument/>,
    'contracts': <FaRegHandshake/>,
    'advice': <FaRegQuestionCircle/>
}
export default iconMap;