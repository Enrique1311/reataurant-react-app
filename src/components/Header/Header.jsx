import React from "react";
import "./Header.css";
import SubHeading from "../SubHeading/SubHeading";
import MainBtn from "../Buttons/MainBtn/MainBtn";

const Header = () => {
	return (
		<div
			className="header section__padding"
			id="home"
		>
			<div>
				<SubHeading title="Chase th new flavour" />
				<h1 className="header-title">The Key to Fine Dining</h1>
				<p className="header-text">
					Sit tellus lobortis sed senectus vivamus molestie. Condimentum
					volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
					aliquam amet tellus{" "}
				</p>
				<MainBtn>Explore Menu</MainBtn>
			</div>
			<div className=""></div>
		</div>
	);
};

export default Header;
