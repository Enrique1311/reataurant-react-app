import React, { useRef } from "react";
import "./Gallery.css";
import { galleryImages } from "../../data/galleryImages";
import SubHeading from "../SubHeading/SubHeading";
import MainBtn from "../MainBtn/MainBtn";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Gallery = () => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		direction === "left"
			? (current.scrollLeft -= 300)
			: (current.scrollLeft += 300);
	};

	return (
		<div className="gallery section__padding">
			<div className="gallery-texts">
				<SubHeading title="Instagram" />
				<h2 className="section__title">Photo Gallery</h2>
				<p className="section__text">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
					eligendi omnis laudantium suscipit placeat praesentium minima quas
					totam.
				</p>
				<MainBtn>View More</MainBtn>
			</div>
			s
			<div className="gallery-photos">
				<div
					className="gallery-photos-container"
					ref={scrollRef}
				>
					{galleryImages.map((image, index) => (
						<div
							className="image-card"
							key={`image-${index}`}
						>
							<img
								src={image}
								alt="image"
							/>
							<AiFillInstagram className="instagram-icon" />
						</div>
					))}
				</div>
				<div className="gallery-photos-arrows">
					<IoIosArrowDropleftCircle
						onClick={() => scroll("left")}
						className="arrow-icon"
					/>
					<IoIosArrowDroprightCircle
						onClick={() => scroll("right")}
						className="arrow-icon"
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
