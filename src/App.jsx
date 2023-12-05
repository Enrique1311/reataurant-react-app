import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import OurMenu from "./components/OurMenu/OurMenu";
import Chef from "./components/Chef/Chef";
import Intro from "./components/Intro/Intro";
import Laurels from "./components/Laurels/Laurels";

function App() {
	return (
		<>
			<Navbar />
			<div className="app-content">
				<Header />
				<AboutUs />
				<OurMenu />
				<Chef />
				<Intro />
				<Laurels />
			</div>
		</>
	);
}

export default App;
