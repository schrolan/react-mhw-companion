import { useMutation } from '@apollo/client'
import { DELETE_ARMORSET } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteArmorSetButton = ({ userId, armorSetId }) => {
    const [deleteArmorSet, { loading }] = useMutation(DELETE_ARMORSET, {
        variables: {
            userId,
            armorSetId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteArmorSet()
    }

    return (
        <button className='btn' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteArmorSetButton