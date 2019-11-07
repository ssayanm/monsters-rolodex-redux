import { MonsterActionTypes } from './monster.types';

export const requestMonsters = () => async (dispatch) => {
	dispatch({ type: MonsterActionTypes.MONSTER_LOADING_PENDING });
    try {
    	const response = await fetch('https://jsonplaceholder.typicode.com/users');
    	const data = await response.json()
    	dispatch({ type: MonsterActionTypes.MONSTER_LOADING_SUCCESS, payload: data})
    } catch(error){
    	dispatch({type: MonsterActionTypes.MONSTER_LOADING_FAILED, payload: error})
    }	
}

