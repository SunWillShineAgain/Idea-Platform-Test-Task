import { Button } from 'antd'
import styles from './Ticket.module.css'
import { useContext } from 'react'
import { Context } from './../../Context/Context'

const currencyTable = {
	RUB: {
		sign: '₽',
		rate: 1,
	},
	USD: {
		sign: '$',
		rate: 90,
	},
	EUR: {
		sign: '€',
		rate: 100,
	},
}

const Ticket = ({ ticket }) => {
	const { currency } = useContext(Context)
	const getWeekDay = date => {
		const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

		return days[new Date(date).getDay()]
	}

	const prepareDate = date => {
		const formattedDate = new Intl.DateTimeFormat('ru', {
			dateStyle: 'medium',
		}).format(new Date(date))

		return `${formattedDate.replace(/\./g, '')}, ${getWeekDay(date)}`
	}

	const TransferVocabulary = stop => {
		const stops = {
			0: 'пересадок',
			1: 'пересадка',
			2: 'пересадки',
			3: 'пересадки',
			4: 'пересадки',
		}

		return `${stop} ${stops[stop]}`
	}

	return (
		<div className={styles.ticketWrap}>
			<div className={styles.ticketLeft}>
				<img className={styles.logo} src={ticket.image} alt='' />

				<Button
					size='middle'
					type='primary'
					style={{
						background: '#ff8124',
						padding: '5px 24px',
						width: '100%',
						height: 'auto',
						lineHeight: 1.4,
					}}
					onClick={() => console.log(`Билет куплен за ${ticket.price} ₽`)}
				>
					Купить
					<br /> за {(
						ticket.price / currencyTable[currency].rate
					).toFixed()}{' '}
					{currencyTable[currency].sign}
				</Button>
			</div>
			<div className={styles.ticketRight}>
				<div className={styles.ticketDeparture}>
					<span className={styles.time}>{ticket.departure_time}</span>
					<span className={styles.airport}>
						{ticket.origin}, {ticket.origin_name}
					</span>
					<span className={styles.date}>
						{prepareDate(ticket.departure_date)}
					</span>
				</div>
				<div className={styles.ticketTransfer}>
					{TransferVocabulary(ticket.stops)}
				</div>
				<div className={styles.ticketArrival}>
					<span className={styles.time}>{ticket.arrival_time}</span>
					<span className={styles.airport}>
						{ticket.destination}, {ticket.destination_name}
					</span>
					<span className={styles.date}>
						{prepareDate(ticket.arrival_date)}
					</span>
				</div>
			</div>
		</div>
	)
}

export default Ticket
