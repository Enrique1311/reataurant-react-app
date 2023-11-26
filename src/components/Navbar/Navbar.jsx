import React from "react";
import "./Navbar.css";
import { IoRestaurantSharp } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import Login from "../Login/Login";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-content">
					{" "}
					<div className="navbar-logo">
						<h1>Terra</h1>
						<IoRestaurantSharp size={30} />
					</div>
					<div className="navbar-links">
						<a href="">Home</a>
						<a href="">Pages</a>
						<a href="">Contact Us</a>
						<a href="">Blog</a>
						<a href="">Landing</a>
					</div>
					<div className="navbar-login">
						<Login />
					</div>
				</div>

				<div className="navbar-hamburguer-logo">
					<HiMenuAlt3 size={35} />
				</div>
			</nav>
			<nav className="mobile-navbar section__padding">
				<div className="close-icon">
					<IoIosCloseCircle
						color="white"
						size={40}
					/>
				</div>
				<div className="mobile-navbar-links">
					<a href="">Home</a>
					<a href="">Pages</a>
					<a href="">Contact Us</a>
					<a href="">Blog</a>
					<a href="">Landing</a>
				</div>
				<div className="navbar-mobile-login">
					{" "}
					<Login />
				</div>
			</nav>
		</>
	);
};

export default Navbar;
