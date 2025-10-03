import { useMutation } from '@apollo/client'
import { DELETE_AILMENT } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteAilmentButton = ({ userId, ailmentId }) => {
    const [deleteAilment, { loading }] = useMutation(DELETE_AILMENT, {
        variables: {
            userId,
            ailmentId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteAilment()
    }

    return (
        <button className='btn' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteAilmentButton