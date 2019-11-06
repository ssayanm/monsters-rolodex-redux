
const INITIAL_STATE = {
    searchField: ''
}

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_SEARCH_FIELD':
			return {
				...state,
				searchField: action.payload
			}
		default:
			return state;
	}
}

export default rootReducer;