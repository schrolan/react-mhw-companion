import { useMutation } from '@apollo/client'
import { DELETE_LOCATION } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteLocationButton = ({ userId, locationId }) => {
    const [deleteLocation, { loading }] = useMutation(DELETE_LOCATION, {
        variables: {
            userId,
            locationId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteLocation()
    }

    return (
        <button className='btn btn-success' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteLocationButton