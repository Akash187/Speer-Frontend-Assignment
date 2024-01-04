import { Call } from '@/types/index.types'
import { Button } from '@mantine/core'

type IProps = {
	call: Call
}

const CallActionButton = ({ call }: IProps) => {
	return (
		<Button size="sm" variant="light">
			{call.is_archived ? 'Unarchieve Call' : 'Archieve Call'}
		</Button>
	)
}
export default CallActionButton
