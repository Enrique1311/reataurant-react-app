import React from "react";
import "./Intro.css";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import myVideo from "../../assets/meal.mp4";
import Logo from "../Logo/Logo";

const Intro = () => {
	return (
		<div className="intro">
			<video
				src={myVideo}
				type="video/mp4"
				autoPlay={true}
				loop
				controls={false}
				muted
			/>
			<div className="intro-logo-container">
				<div className="intro-logo">
					{" "}
					<h1>Gourmet</h1>
					<p>restó</p>
				</div>
			</div>
		</div>
	);
};

export default Intro;
