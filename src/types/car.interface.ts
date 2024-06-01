export interface ICar {
	id: number
	make: string
	price: string
	image: string
}

export interface ICarData extends Omit<ICar, 'id'> {}
