import { archieveCall, unarchieveCall } from '@/api'
import { Call } from '@/types/index.types'
import { Button } from '@mantine/core'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type IProps = {
	call: Call
}

const CallActionButton = ({ call }: IProps) => {
	const isArchieved = call.is_archived
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: () =>
			isArchieved ? unarchieveCall(call.id) : archieveCall(call.id),
		onSuccess: () => {
			if (isArchieved) {
				queryClient.invalidateQueries({ queryKey: ['archieved-calls'] })
			} else {
				queryClient.invalidateQueries({ queryKey: ['inbox-calls'] })
			}
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
