import { combineReducers } from 'redux';

import searchReducer from './search/search.reducer';
import monsterReducer from './monster/monster.reducer';

export default combineReducers({
	search: searchReducer,
	monster: monsterReducer
})