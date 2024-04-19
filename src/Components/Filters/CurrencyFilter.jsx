import { useContext } from 'react'
import { Radio } from 'antd'
import { Context } from '../../Context/Context'

const CurrencyFilter = () => {
	const { currencyHandler } = useContext(Context)

	return (
		<>
			<b>ВАЛЮТА</b>
			<Radio.Group
				defaultValue='RUB'
				buttonStyle='solid'
				size='large'
				style={{ marginBottom: 20 }}
			>
				<Radio.Button
					name='currency'
					value='RUB'
					onChange={() => currencyHandler('RUB')}
				>
					RUB
				</Radio.Button>
				<Radio.Button
					name='currency'
					value='USD'
					onChange={() => currencyHandler('USD')}
				>
					USD
				</Radio.Button>
				<Radio.Button
					name='currency'
					value='EUR'
					onChange={() => currencyHandler('EUR')}
				>
					EUR
				</Radio.Button>
			</Radio.Group>
		</>
	)
}

export default CurrencyFilter
