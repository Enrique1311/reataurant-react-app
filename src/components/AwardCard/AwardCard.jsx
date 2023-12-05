import React from "react";
import "./AwardCard.css";

const AwardCard = ({ award }) => {
	return (
		<div className="awards-card">
			<img
				src={award.imgUrl}
				alt="laurel image"
			/>
			<div className="card-texts">
				<p className="card-title">{award.title}</p>
				<p className="card-subtitle">{award.subtitle}</p>
			</div>
		</div>
	);
};

export default AwardCard;
