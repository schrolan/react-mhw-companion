import { useMutation } from '@apollo/client'
import { DELETE_WEAPON } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteWeaponButton = ({ userId, weaponId }) => {
    const [deleteWeapon, { loading }] = useMutation(DELETE_WEAPON, {
        variables: {
            userId,
            weaponId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteWeapon()
    }

    return (
        <button className='btn btn-success' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteWeaponButton