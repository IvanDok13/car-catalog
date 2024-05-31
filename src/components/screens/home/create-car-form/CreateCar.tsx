import { useForm } from 'react-hook-form'
import styles from './CreateCarForm.module.css'

// const clearData = {
// 	name: '',
// 	price: '',
// 	image: '',
// }
const CreateCarForm = () => {
	// const [data, setData] = useState(clearData)

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	// const createCar = e => {
	// e.preventDefault()
	const createCar = data => {
		// setCars(prev => [{ id: prev.length + 1, ...data }, ...prev])

		reset()
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(createCar)}>
			<input
				// placeholder='Name'
				// onChange={e =>
				// 	setData(prev => ({
				// 		...prev,
				// 		name: e.target.value,
				// 	}))
				// }
				// value={data.name}
				{...register('name', { required: 'Name is required' })}
				placeholder='Name'
			/>
			{errors?.name?.message && (
				<p style={{ color: 'red' }}>Name is required</p>
			)}
			<input
				placeholder='Price'
				// onChange={e =>
				// 	setData(prev => ({
				// 		...prev,
				// 		price: e.target.value,
				// 	}))
				// }
				// value={data.price}
				{...register('price', { required: true })}
			/>
			<input
				placeholder='Image'
				// onChange={e =>
				// 	setData(prev => ({
				// 		...prev,
				// 		image: e.target.value,
				// 	}))
				// }
				// value={data.image}
				{...register('image', { required: true })}
			/>

			<button
				className={styles.btn}
				// onClick={e => createCar(e)}
			>
				Create
			</button>
		</form>
	)
}

export default CreateCarForm
