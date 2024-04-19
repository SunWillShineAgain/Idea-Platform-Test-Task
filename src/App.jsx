import { useState } from 'react'
import { Flex } from 'antd'
import FilterContainer from './Components/Filters/FilterContainer'
import Tickets from './Components/Tickets/Tickets'
import { Context } from './Context/Context'
import './index.css'

const App = () => {
	const [currency, setCurrency] = useState('RUB')
	const [transferCount, setTransferCount] = useState([])

	const currencyHandler = currency => {
		setCurrency(currency)
	}

	const transferHandler = e => {
		const { value, checked } = e.target

		if (checked) {
			setTransferCount([...transferCount, value])
		} else {
			setTransferCount(transferCount.filter(e => e !== value))
		}
	}

	return (
		<Flex gap='middle' align='flex-start'>
			<Context.Provider value={{ currency, currencyHandler, transferHandler }}>
				<FilterContainer />
				<Tickets transfer={transferCount} />
			</Context.Provider>
		</Flex>
	)
}

export default App
