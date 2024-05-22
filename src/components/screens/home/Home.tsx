// import { useMemo } from 'react'
import { useState } from 'react'
import CarItem from './car-item/CarItem'
import { cars as carsData } from './cars.data.js'
import CreateCarForm from './create-car-form/CreateCar'

function Home() {
	// const filteredCars = useMemo(() => cars.filter(car => car.price > 20000), [])
	const [cars, setCars] = useState(carsData)
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
