import { archieveCall, unarchieveCall } from '@/api'
import useNotificationStore from '@/store/notificationStore'
import { Call } from '@/types/index.types'
import { Button } from '@mantine/core'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type IProps = {
	call: Call
}

const CallActionButton = ({ call }: IProps) => {
	const { openNotification } = useNotificationStore()
	const isArchieved = call.is_archived
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: () =>
			isArchieved ? unarchieveCall(call.id) : archieveCall(call.id),
		onSuccess: (message: string) => {
			if (isArchieved) {
				queryClient.invalidateQueries({ queryKey: ['archieved-calls'] })
			} else {
				queryClient.invalidateQueries({ queryKey: ['inbox-calls'] })
			}
			openNotification({ type: 'Success', message })
		},
		onError: (error) => {
			openNotification({ type: 'Error', message: error.message })
		}
	})

	return (
		<Button
			loading={isPending}
			onClick={() => mutate()}
			size="sm"
			variant="light"
		>
			{call.is_archived ? 'Unarchieve Call' : 'Archieve Call'}
		</Button>
	)
}
export default CallActionButton
