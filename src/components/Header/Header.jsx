import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import SubHeading from "../SubHeading/SubHeading";
import MainBtn from "../MainBtn/MainBtn";
import welcome from "../../assets/welcome.png";
import TopBtn from "../TopBtn/TopBtn";

const Header = () => {
	const [showBtn, setShowBtn] = useState(false);
	const scrollRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const headerDiv = scrollRef.current;
			const { y } = headerDiv.getBoundingClientRect();
			console.log(y);

			y <= -10 ? setShowBtn(true) : setShowBtn(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{" "}
			<div
				className="header section__padding"
				id="home"
				ref={scrollRef}
			>
				<div className="header-info">
					<SubHeading title="Chase the new flavour" />
					<h1 className="header-title">The Key to Fine Dining</h1>
					<p className="section__text">
						Sit tellus lobortis sed senectus vivamus molestie. Condimentum
						volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
						aliquam amet tellus.
					</p>
					<a href="#menu">
						<MainBtn>Explore Menu</MainBtn>
					</a>
				</div>
				<div className="header-img">
					<img
						src={welcome}
						alt="header image"
					/>
				</div>{" "}
			</div>
			{showBtn && <TopBtn />}
		</>
	);
};

export default Header;
