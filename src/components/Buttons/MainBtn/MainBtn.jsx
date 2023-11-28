import React from "react";
import "./MainBtn.css";

const MainBtn = ({ children }) => {
	return (
		<button
			type="button"
			className="main-button"
		>
			{children}
		</button>
	);
};

export default MainBtn;
