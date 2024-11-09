import { useMutation } from '@apollo/client'
import { DELETE_DECORATION } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteDecorationButton = ({ userId, decorationId }) => {
    const [deleteDecoration, { loading }] = useMutation(DELETE_DECORATION, {
        variables: {
            userId,
            decorationId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteDecoration()
    }

    return (
        <button className='btn btn-success' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteDecorationButton