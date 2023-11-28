import React from "react";
import "./SubHeading.css";
import spoon from "../../assets/spoon.png";

const SubHeading = ({ title }) => {
	return (
		<div className="sub-heading">
			<p>{title}</p>
			<img
				src={spoon}
				className="sub-heading-img"
			/>
		</div>
	);
};

export default SubHeading;
import "./SubHeading.css";
