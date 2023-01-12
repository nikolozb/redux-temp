import { addFetchedCustomersAction } from '../store/customerReducer'

export const fetchCustomers = () => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => dispatch(addFetchedCustomersAction(json)))
			.catch(err => console.log(err))
	}
}
