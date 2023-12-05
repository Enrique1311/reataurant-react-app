import React, { useRef, useState } from "react";
import "./Intro.css";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import myVideo from "../../assets/meal.mp4";

const Intro = () => {
	const [playVideo, setPlayVideo] = useState(false);
	const videoRef = useRef();

	const playOrPause = () => {
		setPlayVideo(!playVideo);
		playVideo ? videoRef.current.pause() : videoRef.current.play();
	};

	return (
		<div className="intro">
			<video
				ref={videoRef}
				src={myVideo}
				type="video/mp4"
				loop
				controls={false}
				muted
			/>
			<div className="intro-play-logo">
				<div
					className="play-logo"
					onClick={() => playOrPause()}
				>
					{playVideo ? <BsPauseCircleFill /> : <BsPlayCircleFill />}
				</div>
			</div>
		</div>
	);
};

export default Intro;
