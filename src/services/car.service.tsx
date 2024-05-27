import axios from 'axios'

export const CarService = {
	async getAll() {
		const response = await axios.get('https://freetestapi.com/api/v1/cars')
		return response.data
	},
}
