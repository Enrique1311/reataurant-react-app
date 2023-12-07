import React from "react";
import "./Chef.css";
import chefImage from "../../assets/chef.png";
import sign from "../../assets/sign.png";
import SubHeading from "../SubHeading/SubHeading";

const Chef = () => {
	return (
		<div
			className="chef section__padding"
			id="chef"
		>
			<div className="chef-image">
				<img
					src={chefImage}
					alt="chef image"
				/>
			</div>
			<div className="chef-info">
				<div className="chef-info-title">
					<SubHeading title="Chef´s World" />
					<h2 className="section__title">What We Believe In</h2>
				</div>
				<p className="section__text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
					auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
					Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
					lectus eu. Congue iaculis integer curabitur semper sit nunc.
				</p>
				<div>
					<p className="chef-info-name">Kevin Luo</p>
					<p className="chef-info-proffetion">Chef & Founder</p>
				</div>
				<div className="chef-info-sign">
					<img
						src={sign}
						alt="sign"
					/>
				</div>
			</div>
		</div>
	);
};

export default Chef;
