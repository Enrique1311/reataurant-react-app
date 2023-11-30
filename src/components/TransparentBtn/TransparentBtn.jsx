import React from "react";
import "./TransparentBtn.css";

const TransparentBtn = ({ children }) => {
	return (
		<button
			type="button"
			className="transp-button"
		>
			{children}
		</button>
	);
};

export default TransparentBtn;
