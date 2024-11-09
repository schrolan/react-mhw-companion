import { useMutation } from '@apollo/client'
import { DELETE_CHARM } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteCharmButton = ({ userId, charmId }) => {
    const [deleteCharm, { loading }] = useMutation(DELETE_CHARM, {
        variables: {
            userId,
            charmId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteCharm()
    }

    return (
        <button className='btn btn-success' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteCharmButton