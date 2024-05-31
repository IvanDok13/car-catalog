import { Link } from 'react-router-dom'
import styles from '../Home.module.css'
import Price from './Price'

function CarItem({ car }) {
	return (
		<div key={car.id} className={styles.item}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${car.image})` }}
			></div>
			<div className={styles.info}>
				<h2>{car.make}</h2>
				<button onClick={() => setCount(prev => prev + 1)}>Click</button>
				<Price price={car.price} />
				<Link className='btn' to={`/car/${car.id}`}>
					Read more
				</Link>
			</div>
		</div>
	)
}

export default CarItem
