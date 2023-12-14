import React, { useEffect, useRef, useState } from "react";
import "./TopBtn.css";
import { CgArrowLongUp } from "react-icons/cg";

const TopBtn = () => {
	return (
		<div className="top-btn">
			<a href="#home">
				<CgArrowLongUp />
			</a>
		</div>
	);
};

export default TopBtn;
