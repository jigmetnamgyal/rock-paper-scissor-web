import "./App.css";
import { useState } from "react";
import Card from "./components/card/card";
import Loading from "./components/loading/loading";
import ResultCard from "./components/result/resultCard";
import { useLazyQuery, gql } from "@apollo/client";

const GAME_START = gql`
	query GameStart($userChoice: GameEnum!) {
		gameStart(userChoice: $userChoice) {
			result
		}
	}
`;

function App() {
	const [loadingCard, setLoadingCard] = useState(false);
	const [value, setValue] = useState(null);
	const [closeResult, setCloseResult] = useState(false);

	const [getResult, { loading, error, data }] = useLazyQuery(GAME_START, {
		variables: { userChoice: value },
	});

	const handleCloseResult = () => setCloseResult(true);

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
							setValue("rock");
							getResult();
							setCloseResult(false);
						}}
					>
						<Card value="Rock" />
					</div>

					<div
						onClick={() => {
							setLoadingCard(true);
							setValue("paper");
							getResult();
							setCloseResult(false);
						}}
					>
						<Card value={"Paper"} />
					</div>

					<div
						onClick={() => {
							setLoadingCard(true);
							setValue("scissor");
							getResult();
							setCloseResult(false);
						}}
					>
						<Card value="Scissor" />
					</div>
				</div>
				{loadingCard && loading && (
					<Loading value={value} handleCloseLoading={handleCloseLoading} />
				)}

				{data && !closeResult && (
					<ResultCard
						value={value}
						result={data.gameStart.result}
						closeResult={handleCloseResult}
					/>
				)}
			</div>

			<div></div>
		</div>
	);
}

export default App;
