import { MonsterActionTypes } from './monster.types';

const INITIAL_STATE = {
    monsters:[],
    isLoading: false,
    error:''
}

const monsterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case MonsterActionTypes.MONSTER_LOADING_PENDING:
			return {
				...state,
				isLoading: true,
			}
		
		case MonsterActionTypes.MONSTER_LOADING_SUCCESS:
			return {
				...state,
				isLoading: false,
				monsters: action.payload
			}

		case MonsterActionTypes.MONSTER_LOADING_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}	

		default:
			return state;
	}
}

export default monsterReducer;
