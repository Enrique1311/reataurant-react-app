import React from "react";
import "./FindUs.css";
import findUsImg from "../../assets/findus.png";
import SuBHeading from "../SubHeading/SubHeading";
import MainBtn from "../MainBtn/MainBtn";

const FindUs = () => {
	return (
		<div
			className="find-us section__padding"
			id="contact"
		>
			<div className="find-us-texts">
				<SuBHeading title="Contact" />
				<h2 className="section__title">Find Us</h2>
				<p className="section__text">
					Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
				</p>
				<h3>Opening Hours</h3>
				<div>
					{" "}
					<p className="section__text">Mon - Fri: 10:00 am - 02:00 am</p>
					<p className="section__text">Sat - Sun: 10:00 am - 03:00 am</p>
				</div>
				<MainBtn>Visit Us</MainBtn>
			</div>
			<div className="find-us-image">
				<img
					src={findUsImg}
					alt="image"
				></img>
			</div>
		</div>
	);
};

export default FindUs;
