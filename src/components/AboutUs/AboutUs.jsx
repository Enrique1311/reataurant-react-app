import React from "react";
import "./AboutUs.css";
import knife from "../../assets/knife.png";
import MainBtn from "../MainBtn/MainBtn";
import spoon from "../../assets/spoon.png";
import gBack from "../../assets/g.png";

const AboutUs = () => {
	return (
		<div
			className="about-us section__padding"
			id="aboutUs"
		>
			<div className="about-us-back">
				<img src={gBack} />
			</div>
			<div className="about-us-left">
				<div>
					<h2>About Us</h2>
					<img
						src={spoon}
						alt="spoon"
					/>
				</div>
				<p className="about-us-text-left">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
					adipiscing ultrices vulputate posuere tristique. In sed odio nec
					aliquet eu proin mauris et.
				</p>
				<div>
					<MainBtn>Know More</MainBtn>
				</div>
			</div>
			<img
				src={knife}
				alt="knife image"
				className="about-us-image"
			/>
			<div className="about-us-right">
				<div>
					<h2>Our History</h2>
					<img
						src={spoon}
						alt="spoon"
					/>
				</div>
				<p className="about-us-right-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
					adipiscing ultrices vulputate posuere tristique. In sed odio nec
					aliquet eu proin mauris et.
				</p>
				<div>
					<MainBtn>Know More</MainBtn>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
