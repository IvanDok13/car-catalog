import { FC } from 'react'
import { ICar } from '../../types/car.interface'
import styles from '../screens/home/Home.module.css'
import CarItem from '../screens/home/car-item/CarItem'

interface ICatalog {
	data?: ICar[]
}
const Catalog: FC<ICatalog> = ({ data = [] }) => {
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
