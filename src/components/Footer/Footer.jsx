import React from "react";
import "./Footer.css";
import SubHeading from "../SubHeading/SubHeading";
import MainBtn from "../MainBtn/MainBtn";
import Logo from "../Logo/Logo";
import spoon from "../../assets/spoon.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
	return (
		<div>
			<div className="footer-subscribe section__padding">
				<SubHeading title="Newsletter" />
				<h2 className="section__title">Subscribe To Our Newsletter</h2>
				<p className="section__text">And never miss latest Updates!</p>
				<div className="footer-form">
					<input
						type="email"
						placeholder="Email Address"
					/>
					<MainBtn>Subscribe</MainBtn>
				</div>
			</div>
			<div className="footer-contact section__padding">
				<div className="footer-contact-item">
					<h3>Contact Us</h3>
					<p>9 W 53rd St, New York, NY 10019, USA</p>
					<p>+1 212-344-1230</p>
					<p>+1 212-555-1230</p>
				</div>
				<div className="footer-contact-item">
					<div className="footer-logo">
						<h2>GOURMET</h2>
					</div>

					<p>
						"The best way to find yourself is to lose yourself in the service of
						others.”
					</p>
					<img
						src={spoon}
						alt="spoon"
					/>
					<div className="footer-media">
						<FaFacebookF />
						<FiTwitter />
						<FaInstagram />
					</div>
				</div>
				<div className="footer-contact-item">
					{" "}
					<h3>Working Hours</h3>
					<p>Monday-Friday:</p>
					<p>08:00 am -12:00 am</p>
					<p>Saturday-Sunday:</p>
					<p>07:00am -11:00 pm</p>
				</div>
			</div>
			<p className="reserved">2023. All Rights reserved.</p>
		</div>
	);
};

export default Footer;
