import { ComponentType, useContext } from 'react'
import { JSX } from 'react/jsx-runtime'
import { AuthContext } from '../providers/AuthProvider'

export const withAuth =
	(Component: ComponentType) => (props: JSX.IntrinsicAttributes) => {
		const { user } = useContext(AuthContext)

		if (!user) return <p>Please login</p>
		return <Component {...props} />
	}
