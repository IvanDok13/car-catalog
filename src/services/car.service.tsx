import axios from 'axios'
import { ICar, ICarData } from '../types/car.interface'

export const CarService = {
	async getAll() {
		const response = await axios.get<ICar[]>(
			'https://freetestapi.com/api/v1/cars'
		)
		return response.data
	},
	async getById(id: string) {
		const response = await axios.get<ICar[]>(
			`https://freetestapi.com/api/v1/cars?id=${id}`
		)
		return response.data[+id - 1]
	},

	async create(data: ICarData) {
		return axios.post('https://freetestapi.com/api/v1/cars', data)
	},
}
