import { unarchieveCalls } from '@/api'
import CallGroupByDate from '@/components/calls/CallGroupByDate'
import useNotificationStore from '@/store/notificationStore'
import { CallGroupByDate as CallGroupByDateType } from '@/types/index.types'
import { Button, Stack } from '@mantine/core'
import { IconArchiveOff } from '@tabler/icons-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type IProps = {
	callGroups: CallGroupByDateType[]
}

const ArchievedContainer = ({ callGroups }: IProps) => {
	const { openNotification } = useNotificationStore()
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: () => {
			const call_ids: string[] = []
			callGroups.forEach((group) => {
				group.calls.forEach((call) => call_ids.push(call.id))
			})

			return unarchieveCalls(call_ids)
		},
		onSuccess: (message: string) => {
			queryClient.invalidateQueries({ queryKey: ['archieved-calls'] })
			openNotification({ type: 'Success', message })
		},
		onError: (error) => {
			openNotification({ type: 'Error', message: error.message })
		}
	})

	return (
		<Stack mb="xl">
			<Button
				color="cyan"
				loading={isPending}
				onClick={() => mutate()}
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
