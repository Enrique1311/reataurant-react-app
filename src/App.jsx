import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
	return (
		<>
			<Navbar />
			<div className="app-content">
				<Header />
				<AboutUs />
			</div>
		</>
	);
}

export default App;
