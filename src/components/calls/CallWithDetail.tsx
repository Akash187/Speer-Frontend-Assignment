import CallActionButton from '@/components/calls/CallActionButton'
import CallTypeIcon from '@/components/calls/CallTypeIcon'
import ShowCallProperty from '@/components/calls/ShowCallProperty'
import { Call } from '@/types/index.types'
import { Card, Collapse, Flex, Group, Stack, Text, rem } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { format } from 'date-fns'

type IProps = {
	call: Call
}

const CallWithDetail = ({ call }: IProps) => {
	const [opened, { toggle }] = useDisclosure(false)
	const isMobile = useMediaQuery(`(max-width: 36em)`)

	const getCallDirection = () => {
		if (call.direction === 'inbound') {
			return 'Incoming'
		} else if (call.direction === 'outbound') {
			return 'Outgoing'
		} else {
			return 'Unknown'
		}
	}

	const getCallType = () => {
		if (call.call_type === 'answered') {
			return 'Answered Call'
		} else if (call.call_type === 'missed') {
			return 'Missed Call'
		} else if (call.call_type === 'voicemail') {
			return 'Voicemail'
		} else {
			return 'Unknown Call'
		}
	}

	const getDuration = () => {
		let duration = call.duration
		const hours = Math.floor(duration / 3600)
		duration = duration % 3600
		const minutes = Math.floor(duration / 60)
		duration = duration % 60
		const seconds = duration

		const formattedDuration = []

		if (hours) {
			formattedDuration.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`)
		}
		if (minutes) {
			formattedDuration.push(`${minutes} ${minutes === 1 ? 'min' : 'mins'}`)
		}
		formattedDuration.push(`${seconds} ${seconds === 1 ? 'sec' : 'secs'}`)

		return formattedDuration.join(', ')
	}

	const getCallFlow = () => {
		const flow = []
		flow.push(call.from || 'Unknown')
		flow.push(call.via || 'Unknown')
		flow.push(call.to || 'Unknown')

		return flow.join(' -> ')
	}

	return (
		<Card w="100%" mih={rem(56)} shadow="xs" p={0} radius={'md'}>
			<Flex
				w={'100%'}
				h={rem(56)}
				style={{ cursor: 'pointer' }}
				onClick={toggle}
				align="center"
				justify="space-between"
				px={isMobile ? 'xs' : 'sm'}
			>
				<Group>
					<CallTypeIcon callType={call.call_type} direction={call.direction} />
					{call.direction === 'inbound' ? (
						<Text>{call.from || 'Unknown'}</Text>
					) : call.direction === 'outbound' ? (
						<Text>{call.to || 'Unknown'}</Text>
					) : (
						'Unknown'
					)}
				</Group>
				<Text>{format(call.created_at, 'hh:mm a')}</Text>
			</Flex>

			<Collapse
				in={opened}
				transitionDuration={200}
				transitionTimingFunction="linear"
			>
				<Stack p="xs">
					<Group justify="space-between">
						<ShowCallProperty property="Call Type" value={getCallType()} />
						<ShowCallProperty property="Direction" value={getCallDirection()} />
					</Group>
					<Group justify="space-between">
						<ShowCallProperty property="Call Flow" value={getCallFlow()} />
						<ShowCallProperty property="Duration" value={getDuration()} />
					</Group>
					<Group justify="flex-end">
						<CallActionButton call={call} />
					</Group>
				</Stack>
			</Collapse>
		</Card>
	)
}
export default CallWithDetail
