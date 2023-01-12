const initialState = {
	customers: [],
}

export const customerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CUSTOMER':
			return { ...state }
		case 'GET_CUSTOMERS':
			return { ...state }
		default:
			return state
	}
}
