import CallGroupByDate from '@/components/calls/CallGroupByDate'
import { CallGroupByDate as CallGroupByDateType } from '@/types/index.types'
import { Button, Stack } from '@mantine/core'
import { IconArchiveOff } from '@tabler/icons-react'

type IProps = {
	callGroups: CallGroupByDateType[]
}

const ArchievedContainer = ({ callGroups }: IProps) => {
	return (
		<Stack mb="xl">
			<Button
				color="cyan"
				disabled={callGroups.length === 0}
				leftSection={<IconArchiveOff />}
			>
				Unarchieve All Calls
			</Button>
			{callGroups.map((callGroup) => (
				<CallGroupByDate key={callGroup.order} callGroup={callGroup} />
			))}
		</Stack>
	)
}
export default ArchievedContainer
