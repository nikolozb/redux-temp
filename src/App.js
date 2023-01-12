import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import {
	addCustomerAction,
	removeCustomerAction,
} from './store/customerReducer'
import { addCashAction, getCashAction } from './store/cashReducer'

function App() {
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash.cash)
	const customers = useSelector(state => state.customers.customers)

	const addCash = cash => dispatch(addCashAction(cash))

	const getCash = cash => dispatch(getCashAction(cash))

	const addCustomer = name => {
		const customer = {
			id: Date.now(),
			name,
		}
		dispatch(addCustomerAction(customer))
	}

	const removeCustomer = id => dispatch(removeCustomerAction(id))

	return (
		<div className='App'>
			<div>{cash}</div>
			<div style={{ display: 'flex' }}>
				<button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
				<button onClick={() => getCash(Number(prompt()))}>Get Cash</button>

				<button onClick={() => addCustomer(prompt())}>Add Customer</button>
				{/* <button onClick={() => removeCustomer()}>Remove Customers</button> */}
			</div>
			{customers.length > 0 ? (
				<div>
					{customers.map(customer => (
						<button onClick={() => removeCustomer(customer.id)}>
							{customer.name}
						</button>
					))}
				</div>
			) : (
				<h1>No customers...</h1>
			)}
		</div>
	)
}

export default App
