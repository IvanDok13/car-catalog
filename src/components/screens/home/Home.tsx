// import { useMemo } from 'react'
import { useEffect, useState } from 'react'
import { CarService } from '../../../services/car.service'
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

	return (
		<div>
			<h1>Cars catalog</h1>
			<CreateCarForm setCars={setCars} />
			<div>
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
