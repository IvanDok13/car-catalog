// import { useMemo } from 'react'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'
import { CarService } from '../../../services/car.service'
import styles from './Home.module.css'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCar'

function Home() {
	const [cars, setCars] = useState([])
	//=================== FILTER =====================

	// const filteredCars = useMemo(() => cars.filter(car => car.price > 20000), [])

	//=================== FETCH DATA =====================

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await fetch('https://freetestapi.com/api/v1/cars')
	// 		const data = await response.json()
	// 		setCars(data)
	// 	}

	// 	fetchData()
	// }, [])

	useEffect(() => {
		const fetchData = async () => {
			const data = await CarService.getAll()
			setCars(data)
		}

		fetchData()
	}, [])

	const { user, setUser } = useContext(AuthContext)

	return (
		<div>
			<h1>Cars catalog</h1>

			{user ? (
				<>
					<h2>Welcome, {user.name}!</h2>
					<button onClick={() => setUser(null)}>Logout</button>
				</>
			) : (
				<button onClick={() => setUser({ name: 'Max' })}>Login</button>
			)}

			<CreateCarForm setCars={setCars} />
			<div className={styles.cars}>
				{cars.length ? (
					cars.map(car => <CarItem key={car.id} car={car} />)
				) : (
					<p>There are not cars</p>
				)}
			</div>
		</div>
	)
}

export default Home
