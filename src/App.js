import "./App.css";
import { Grid } from "@material-ui/core";
import { Card } from "./components/Card";
import { buttonLinks, CardImages, buttonLinks2 } from "./enums/enums";

const AppStyle = {
	height: "100vh",
	width: "100vw",
	display: "flex",
	justifyContent: "center",
	backgroundColor: "#dadada",
	color: "white"
};

export const App = () => (
	<div style={AppStyle} className="App">
		<Grid container spacing={1} direction="row" justifyContent="center">
			<Grid item xs={12}>
				<div>xs=12</div>
			</Grid>

			<Grid item xs={12} md={6}>
				<Card withBtn />
			</Grid>
			<Grid item xs={12} md={6}>
				<Card withBtn />
			</Grid>

			{buttonLinks2.map((link, i) => (
				<Grid item xs={12} md={6} key={i}>
					<Card image={CardImages[i]} linked={buttonLinks.google} />
				</Grid>
			))}
			<Grid item xs={12}>
				<div>xs=8</div>
			</Grid>
		</Grid>
	</div>
);
