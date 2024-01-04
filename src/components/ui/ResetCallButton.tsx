import { resetCalls } from '@/api'
import { Button, Center } from '@mantine/core'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const ResetCallButton = () => {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationFn: resetCalls,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['inbox-calls'] })
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
