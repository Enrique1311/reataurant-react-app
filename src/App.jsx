import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import OurMenu from "./components/OurMenu/OurMenu";
import Chef from "./components/Chef/Chef";

function App() {
	return (
		<>
			<Navbar />
			<div className="app-content">
				<Header />
				<AboutUs />
				<OurMenu />
				<Chef />
			</div>
		</>
	);
}

export default App;
