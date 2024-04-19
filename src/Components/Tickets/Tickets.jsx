import { useEffect, useState } from 'react'
import data from '../../tickets.json'
import { Flex } from 'antd'
import Ticket from './Ticket'

const Tickets = ({ transfer }) => {
	const { tickets } = data
	const [sortedTickets, setSortedTickets] = useState([])

	// фильтрация
	useEffect(() => {
		const sorted = tickets.reduce((acc, item) => {
			if (transfer.includes('all')) return tickets

			transfer.forEach(element => {
				if (element == item.stops) acc.push(item)
			})
			return acc
		}, [])

		sorted.length === 0 ? setSortedTickets(tickets) : setSortedTickets(sorted)
	}, [transfer])

	// сортировка 
	useEffect(() => {
		setSortedTickets(tickets.sort((a, b) => a.price - b.price))
	}, [])

	return (
		<Flex vertical gap='middle'>
			{sortedTickets.map(ticket => {
				return <Ticket key={ticket.id} ticket={ticket} />
			})}
		</Flex>
	)
}

export default Tickets
