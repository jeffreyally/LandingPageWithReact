//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/Jumbotron.jsx";
import { Topnavbar } from "./component/Topnavbar.jsx";
import { Bottomnavbar } from "./component/Bottomnavbar.jsx";
import { Cards } from "./component/Cards.jsx";

//render your react application
ReactDOM.render(
	<div>
		<Topnavbar />,
		<Home />,
		<Cards />,
		<Bottomnavbar />,
	</div>,
	document.querySelector("#app")
);
