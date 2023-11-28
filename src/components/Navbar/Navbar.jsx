import React, { useState } from "react";
import "./Navbar.css";
import { IoRestaurantSharp } from "react-icons/io5";
import Login from "../Login/Login";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-content">
					{" "}
					<a
						href="#home"
						className="navbar-logo"
					>
						<h1>Gourmet</h1>
						<p>restó</p>
					</a>
					<div className="navbar-links">
						<a href="#home">Home</a>
						<a href="#aboutUs">About Us</a>
						<a href="">Menu</a>
						<a href="#blog">Awards</a>
						<a href="#landing">Contact</a>
					</div>
					<div className="navbar-login">
						<Login />
					</div>
				</div>
				<div>
					<RiMenuFill
						onClick={() => {
							setToggleMenu(true);
						}}
						className="navbar-hamburguer-logo"
					/>
				</div>
			</nav>{" "}
			{toggleMenu && (
				<nav className="mobile-navbar section__padding">
					<AiOutlineClose
						className="close-icon"
						onClick={() => {
							setToggleMenu(false);
						}}
					/>
					<div className="mobile-navbar-links">
						<a
							href="#home"
							className="left-side"
						>
							Home
						</a>
						<a
							href="#aboutUs"
							className="right-side"
						>
							About Us
						</a>
						<a
							href="#menu"
							className="left-side"
						>
							Menu
						</a>
						<a
							href="#awards"
							className="right-side"
						>
							Awards
						</a>
						<a
							href="#contact"
							className="left-side"
						>
							Contact
						</a>
					</div>
					<div className="navbar-mobile-login right-side">
						<Login />
					</div>
				</nav>
			)}
		</>
	);
};

export default Navbar;
