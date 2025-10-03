import { useMutation } from '@apollo/client'
import { DELETE_SKILL } from '../utils/mutations'
import { GET_USER } from '../utils/queries'

const DeleteSkillButton = ({ userId, skillId }) => {
    const [deleteSkill, { loading }] = useMutation(DELETE_SKILL, {
        variables: {
            userId,
            skillId
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }]
    })

    const handleDelete = async () => {
        await deleteSkill()
    }

    return (
        <button className='btn' onClick={handleDelete} disabled={loading}>Remove</button>
    )
}

export default DeleteSkillButton