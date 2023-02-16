import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/card/card";
import Loading from "./components/loading/loading";
import ResultCard from "./components/result/resultCard";

function App() {
	const [loadingCard, setLoadingCard] = useState(false);
	const [value, setValue] = useState("");

	const handleLoadingCard = () => setLoadingCard(true);

	const handleCloseLoading = () => setLoadingCard(false);

	return (
		<div className="App">
			<div className="game-container">
				<div className="game-intro">
					<h1>Rock - Paper - Scissors</h1>
					<p>
						Rock Paper Scissors is a zero sum game that is usually played by two
						people using their hands and no tools. The idea is to make shapes
						with an outstretched hand where each shape will have a certain
						degree of power and will lead to an outcome.
					</p>
				</div>

				<div className="choice-card">
					<div
						onClick={() => {
							setLoadingCard(true);
							setValue("Rock");
						}}
					>
						<Card value="Rock" />
					</div>

					<div
						onClick={() => {
							setLoadingCard(true);
							setValue("Paper");
						}}
					>
						<Card value={"Paper"} />
					</div>

					<div
						onClick={() => {
							setLoadingCard(true);
							setValue("Scissors");
						}}
					>
						<Card value="Scissors" />
					</div>
				</div>

				{loadingCard && (
					<Loading value={value} handleCloseLoading={handleCloseLoading} />
				)}
				{/* <ResultCard value="Rock" curbChoice="Paper" result="It's a tie" /> */}
			</div>

			<div></div>
		</div>
	);
}

export default App;
