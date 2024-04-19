import { Card, Flex } from 'antd'
import CurrencyFilter from './CurrencyFilter'
import TransferCountFilter from './TransferCountFilter'

const FilterContainer = () => {
	return (
		<Card style={{ position: 'sticky', top: 30 }}>
			<Flex gap='middle' vertical>
				<CurrencyFilter />
				<TransferCountFilter />
			</Flex>
		</Card>
	)
}

export default FilterContainer
