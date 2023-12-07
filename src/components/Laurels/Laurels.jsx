import React from "react";
import "./Laurels.css";
import SubHeading from "../SubHeading/SubHeading";
import { awards } from "../../data/appData";
import AwardCard from "../AwardCard/AwardCard";
import laurelsImage from "../../assets/laurels.png";

const Laurels = () => {
	return (
		<div
			className="laurels section__padding"
			id="awards"
		>
			<div className="laurels-info">
				<SubHeading title="Awards & recognition" />
				<h2 className="section__title">Our Laurels</h2>
				<div className="info-content">
					{awards.map((award) => (
						<AwardCard
							award={award}
							key={award.title}
						/>
					))}
				</div>
			</div>
			<div className="laurels-image">
				{" "}
				<img
					src={laurelsImage}
					alt="laurels image"
				/>
			</div>
		</div>
	);
};

export default Laurels;
