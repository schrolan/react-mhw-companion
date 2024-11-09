import { useMutation } from '@apollo/client'
import { DELETE_MONSTER } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteMonsterButton = ({ userId, monsterId }) => {
    const [deleteMonster, { loading }] = useMutation(DELETE_MONSTER, {
        variables: {
            userId,
            monsterId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteMonster()
    }

    return (
        <button className='btn btn-success' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteMonsterButton