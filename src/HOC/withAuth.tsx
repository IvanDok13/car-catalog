import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

export const withAuth = Component => props => {
	const { user } = useContext(AuthContext)

	if (!user) return <p>Please login</p>
	return <Component {...props} />
}
