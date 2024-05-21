import styles from './Home.module.css'

function Home() {
	return (
		<div>
			<h1>Cars catalog</h1>
			<div>
				<div className={styles.item}>
					<div className={styles.image}></div>
					<div className={styles.info}>
						<h2>Car 1</h2>
						<p>$100 000</p>
						<button>Read more</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
