import { useForm } from 'react-hook-form'
import styles from './CreateCarForm.module.css'
import ErrorMessage from './ErrorMessage'
import useCreateCar from './useCreateCar'

const CreateCarForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	const { createCar } = useCreateCar
	// const { createCar } = useCreateCar(reset)

	return (
		<form className={styles.form} onSubmit={handleSubmit(createCar)}>
			<input
				{...register('name', { required: 'Name is required' })}
				placeholder='Name'
			/>
			<ErrorMessage error={errors?.name?.message} />
			<input placeholder='Price' {...register('price', { required: true })} />
			<input placeholder='Image' {...register('image', { required: true })} />

			<button className={styles.btn}>Create</button>
		</form>
	)
}

export default CreateCarForm
