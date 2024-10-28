import { useMutation } from '@apollo/client';
import {
    DELETE_AILMENT,
    DELETE_ARMOR,
    DELETE_ARMORSET,
    DELETE_CHARM,
    DELETE_DECORATION,
    DELETE_EVENT,
    DELETE_ITEM,
    DELETE_LOCATION,
    DELETE_MONSTER,
    DELETE_SKILL,
    DELETE_WEAPON
} from '../utils/mutations';
import { GET_USER } from '../utils/queries';

const DeleteButton = ({ userId, entityId, entityType }) => {
    // Select the appropriate mutation based on the entity type
    let deleteMutation;
    switch (entityType) {
        case 'ailment':
            deleteMutation = DELETE_AILMENT;
            break;
        case 'armor':
            deleteMutation = DELETE_ARMOR;
            break;
        case 'armorSet':
            deleteMutation = DELETE_ARMORSET;
            break;
        case 'charm':
            deleteMutation = DELETE_CHARM;
            break;
        case 'decoration':
            deleteMutation = DELETE_DECORATION;
            break;
        case 'event':
            deleteMutation = DELETE_EVENT;
            break;
        case 'item':
            deleteMutation = DELETE_ITEM;
            break;
        case 'location':
            deleteMutation = DELETE_LOCATION;
            break;
        case 'monster':
            deleteMutation = DELETE_MONSTER;
            break;
        case 'skill':
            deleteMutation = DELETE_SKILL;
            break;
        case 'weapon':
            deleteMutation = DELETE_WEAPON;
            break;
        default:
            throw new Error(`Unsupported entity type: ${entityType}`);
    }

    const [deleteEntity, { loading }] = useMutation(deleteMutation, {
        variables: {
            userId,
            [entityType + 'Id']: entityId // Dynamically set the ID based on the entity type
        },
        refetchQueries: [{
            query: GET_USER,
            variables: { _id: userId }
        }],
    });

    const handleDelete = async () => {
        await deleteEntity();
    };

    return (
        <button className='btn btn-danger' onClick={handleDelete} disabled={loading}>
            {loading ? 'Removing...' : 'Remove from favorites'}
        </button>
    );
};

export default DeleteButton;