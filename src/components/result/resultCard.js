import styles from "./resultCard.module.css";

const ResultCard = ({ value, result, closeResult }) => {
	return (
		<div className={styles.resultCard}>
			<h3>{result}</h3>
			<img src={`assets/${value}.svg`} alt={value} />
			<button className={styles.btn} onClick={closeResult}>
				OK
			</button>
		</div>
	);
};

export default ResultCard;
