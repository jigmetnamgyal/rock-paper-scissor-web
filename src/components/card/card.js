import styles from "./card.module.css";

const Card = ({ value }) => {
	return (
		<div className={styles.card}>
			<img src={`assets/${value}.svg`} alt={value} />
			<p>{value}</p>
		</div>
	);
};

export default Card;
