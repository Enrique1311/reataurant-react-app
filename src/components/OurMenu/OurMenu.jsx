import React from "react";
import "./OurMenu.css";
import SubHeading from "../SubHeading/SubHeading";
import MainBtn from "../MainBtn/MainBtn";
import MenuItem from "../MenuItem/MenuItem";
import { wines, cocktails } from "../../data/menuData";
import menuImage from "../../assets/cocktail.png";

const OurMenu = () => {
	return (
		<div
			className="our-menu section__padding"
			id="menu"
		>
			<div className="our-menu-title">
				<SubHeading title="Menu that fits you palatte" />
				<h2>Today’s Special</h2>
			</div>
			<div className="our-menu-content">
				<div className="our-menu-wines">
					<h3>Wine & Beer</h3>
					<div className="our-menu-items">
						{wines.map((wine, index) => (
							<MenuItem
								key={wine.title + index}
								title={wine.title}
								price={wine.price}
								tags={wine.tags}
							/>
						))}
					</div>
				</div>
				<div>
					<img
						src={menuImage}
						alt="menu image"
						className="our-menu-image"
					/>
				</div>
				<div className="our-menu-cocktails">
					<h3 className="our-menu-heading">Cocktails</h3>
					<div className="our-menu-items">
						{cocktails.map((cocktail, index) => (
							<MenuItem
								key={cocktail.title + index}
								title={cocktail.title}
								price={cocktail.price}
								tags={cocktail.tags}
							/>
						))}
					</div>
				</div>
			</div>
			<MainBtn>View More</MainBtn>
		</div>
	);
};

export default OurMenu;
