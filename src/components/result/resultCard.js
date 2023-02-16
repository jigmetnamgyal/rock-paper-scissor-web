import styles from "./resultCard.module.css";

const ResultCard = ({ value, result, curbChoice }) => {
	return (
		<div className={styles.resultCard}>
			<h3>{result}</h3>
			<p>Curb with {curbChoice} wins</p>
			<p>You with {value} wins</p>
			<img src={`assets/${value}.svg`} alt={value} />
			<button className={styles.btn}>OK</button>
		</div>
	);
};

export default ResultCard;
