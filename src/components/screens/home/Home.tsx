// import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CarService } from '../../../services/car.service'
import Catalog from '../../ui/Catalog'
import Header from '../../ui/Header'
import CreateCarForm from './create-car-form/CreateCar'

function Home() {
	//=================== CASH DATA =====================
	const { data, isLoading, error } = useQuery({
		queryKey: ['cars'],
		queryFn: () => CarService.getAll(),
	})
	//=================== CONTEXT =====================
	// const [cars, setCars] = useState([])
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await CarService.getAll()
	// 		setCars(data)
	// 	}

	// 	fetchData()
	// }, [])
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

	if (isLoading) return <p>Loading...</p>
	if (error) return <p>Error</p>

	return (
		<div>
			<h1>Cars catalog</h1>
			<Header />
			<CreateCarForm />
			<Catalog data={data} />
		</div>
	)
}

export default Home
