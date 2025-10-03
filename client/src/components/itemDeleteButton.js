import { useMutation } from '@apollo/client'
import { DELETE_ITEM } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteItemButton = ({ userId, itemId }) => {
    const [deleteItem, { loading }] = useMutation(DELETE_ITEM, {
        variables: {
            userId,
            itemId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteItem()
    }

    return (
        <button className='btn' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteItemButton