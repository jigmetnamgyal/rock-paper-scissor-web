import styles from "./loading.module.css";

const Loading = ({ value, handleCloseLoading }) => {
	return (
		<div className={styles.loadingCard}>
			<div className={styles.closeContainer}>
				<p onClick={handleCloseLoading}>X</p>
			</div>

			<div className={styles.loadingCardContainer}>
				<div>
					<img src={`assets/${value}.svg`} alt={value} />
					<p>{value}</p>
				</div>

				<img src="assets/curb_logo.png" alt={value} />
			</div>
		</div>
	);
};

export default Loading;
