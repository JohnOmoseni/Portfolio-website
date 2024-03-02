import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RxEnvelopeClosed } from "react-icons/rx";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const ContactInfo = () => {
	return (
		<div className="contact-info">
			<div className="info whatsapp">
				<span className="icon">
					<CiLocationOn size={20} />
				</span>
				<p>Lagos, Nigeria</p>
			</div>
			<div className="info whatsapp">
				<span className="icon">
					<FaPhoneAlt size={16} />
				</span>
				<p>+2349012603169</p>
			</div>
			<div className="info whatsapp">
				<span className="icon">
					<AiOutlineWhatsApp size={16} />
				</span>
				<a
					href="https://wa.me/+2349012603169"
					aria-label="Whatsapp"
					target="_blank"
					rel="noreferrer"
				>
					Link to Whatsapp
				</a>
			</div>
			<div className="info email">
				<span className="icon">
					<RxEnvelopeClosed size={18} />
				</span>
				<p>ojaywilliams100@gmail.com</p>
			</div>
		</div>
	);
};
