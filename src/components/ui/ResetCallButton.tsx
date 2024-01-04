import { resetCalls } from '@/api'
import useNotificationStore from '@/store/notificationStore'
import { Button, Center } from '@mantine/core'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const ResetCallButton = () => {
	const { openNotification } = useNotificationStore()
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: resetCalls,
		onSuccess: (message: string) => {
			queryClient.invalidateQueries({ queryKey: ['inbox-calls'] })
			openNotification({ type: 'Success', message })
		},
		onError: (error) => {
			openNotification({ type: 'Error', message: error.message })
		}
	})

	return (
		<Center>
			<Button loading={isPending} onClick={() => mutate()}>
				Reset Calls
			</Button>
		</Center>
	)
}
export default ResetCallButton
