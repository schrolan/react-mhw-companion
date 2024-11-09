import { useMutation } from '@apollo/client'
import { DELETE_ARMOR } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteArmorButton = ({ userId, armorId }) => {
    const [deleteArmor, { loading }] = useMutation(DELETE_ARMOR, {
        variables: {
            userId,
            armorId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteArmor()
    }

    return (
        <button className='btn btn-success' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteArmorButton