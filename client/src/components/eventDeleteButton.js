import { useMutation } from '@apollo/client'
import { DELETE_EVENT } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteEventButton = ({ userId, eventId }) => {
    const [deleteEvent, { loading }] = useMutation(DELETE_EVENT, {
        variables: {
            userId,
            eventId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteEvent()
    }

    return (
        <button className='btn btn-success' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteEventButton