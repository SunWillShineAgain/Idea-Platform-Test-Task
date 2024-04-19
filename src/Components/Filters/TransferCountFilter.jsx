import { useContext } from 'react'
import { Checkbox, Flex } from 'antd'
import { Context } from '../../Context/Context'

const TransferCountFilter = () => {
	const { transferHandler } = useContext(Context)

	return (
		<>
			<b>КОЛИЧЕСТВО ПЕРЕСАДОК</b>
			<Flex>
				<Checkbox.Group
					style={{ flexDirection: 'column' }}
					defaultValue={['Все']}
				>
					<Checkbox onChange={transferHandler} value='all'>
						Все
					</Checkbox>
					<Checkbox onChange={transferHandler} value='0'>
						Без пересадок
					</Checkbox>
					<Checkbox onChange={transferHandler} value='1'>
						1 Пересадка
					</Checkbox>
					<Checkbox onChange={transferHandler} value='2'>
						2 Пересадки
					</Checkbox>
					<Checkbox onChange={transferHandler} value='3'>
						3 Пересадки
					</Checkbox>
				</Checkbox.Group>
			</Flex>
		</>
	)
}

export default TransferCountFilter
