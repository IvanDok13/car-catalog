import axios from 'axios'

export const CarService = {
	async getAll() {
		const response = await axios.get('https://freetestapi.com/api/v1/cars')
		return response.data
	},
	async getById(id) {
		const response = await axios.get(
			`https://freetestapi.com/api/v1/cars?id=${id}`
		)
		return response.data[0]
	},
}
