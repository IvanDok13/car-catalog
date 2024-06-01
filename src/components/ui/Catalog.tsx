import CarItem from '../screens/home/car-item/CarItem'
import styles from '../screens/home/Home.module.css'

const Catalog = ({ data }) => {
	return (
		<div className={styles.cars}>
			{data.length ? (
				data.map(car => <CarItem key={car.id} car={car} />)
			) : (
				<p>There are not cars</p>
			)}
		</div>
	)
}

export default Catalog
