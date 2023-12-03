import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
	return (
		<div className="our-menu-item">
			<div className="item-head">
				<p className="item-title">{title}</p>
				<div className="item-line"></div>
				<p className="item-price">{price}</p>
			</div>
			<p className="item-tags">{tags}</p>
		</div>
	);
};

export default MenuItem;
