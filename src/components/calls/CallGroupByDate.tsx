import CallWithDetail from '@/components/calls/CallWithDetail'
import { CallGroupByDate as CallGroupByDateType } from '@/types/index.types'
import { Divider, Stack, Text } from '@mantine/core'

type IProps = {
	callGroup: CallGroupByDateType
}

const CallGroupByDate = ({ callGroup }: IProps) => {
	return (
		<Stack>
			<Divider
				my="xs"
				variant="dashed"
				labelPosition="center"
				label={<Text>{callGroup.groupDate}</Text>}
			/>
			{callGroup.calls.map((call) => (
				<CallWithDetail call={call} />
			))}
		</Stack>
	)
}
export default CallGroupByDate
