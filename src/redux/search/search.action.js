import { SearchActionTypes } from './search.types';

export const setSearchField = (text) => ({
	type:  SearchActionTypes.CHANGE_SEARCH_FIELD,
	payload: text
})