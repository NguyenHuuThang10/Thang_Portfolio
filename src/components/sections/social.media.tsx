import { FaFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface IProps {
    phone: string, gmail: string, github: string, facebook: string
}

const SocialMedia = (props: IProps) => {
    const { phone, gmail, github, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="Github">
                <FaGithub size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook">
                <FaFacebook size={30} />
            </a>
            <button onClick={() => alert(`Gmail: ${gmail}`)} style={{ color: "#ec4899" }} className="highlight bg-transparent border-0" title="Gmail">
                <SiGmail size={30} />
            </button>
            <button onClick={() => alert(`Phone: ${phone}`)} style={{ color: "#ec4899" }} className="highlight bg-transparent border-0" title="Phone">
                <FaPhone size={30} />
            </button>

        </div>
    )
}

export default SocialMedia;