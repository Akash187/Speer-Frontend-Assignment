import { Call } from '@/types/index.types'
import { ThemeIcon } from '@mantine/core'
import {
	IconCircleOff,
	IconMessageDown,
	IconMessageUp,
	IconPhoneIncoming,
	IconPhoneOutgoing
} from '@tabler/icons-react'

type IProps = {
	callType: Call['call_type']
	direction: Call['direction']
}

const CallTypeIcon = ({ callType, direction }: IProps) => {
	if (callType === 'answered') {
		if (direction === 'inbound') {
			return (
				<ThemeIcon variant="light" color="green" radius="xl" size="xl">
					<IconPhoneIncoming />
				</ThemeIcon>
			)
		} else {
			if (direction === 'outbound') {
				return (
					<ThemeIcon variant="light" color="green" radius="xl" size="xl">
						<IconPhoneOutgoing />
					</ThemeIcon>
				)
			}
		}
	} else if (callType === 'missed') {
		if (direction === 'inbound') {
			return (
				<ThemeIcon variant="light" color="red" radius="xl" size="xl">
					<IconPhoneIncoming />
				</ThemeIcon>
			)
		} else {
			if (direction === 'outbound') {
				return (
					<ThemeIcon variant="light" color="red" radius="xl" size="xl">
						<IconPhoneOutgoing />
					</ThemeIcon>
				)
			}
		}
	} else if (callType === 'voicemail') {
		if (direction === 'inbound') {
			return (
				<ThemeIcon variant="light" color="blue" radius="xl" size="xl">
					<IconMessageDown />
				</ThemeIcon>
			)
		} else {
			if (direction === 'outbound') {
				return (
					<ThemeIcon variant="light" color="blue" radius="xl" size="xl">
						<IconMessageUp />
					</ThemeIcon>
				)
			}
		}
	}
	return (
		<div>
			<ThemeIcon variant="light" color="gray" radius="xl" size="xl">
				<IconCircleOff />
			</ThemeIcon>
		</div>
	)
}
export default CallTypeIcon
