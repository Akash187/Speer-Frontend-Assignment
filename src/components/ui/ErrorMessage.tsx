import { Text } from '@mantine/core'

type IProps = {
	message: string
}

const ErrorMessage = ({ message }: IProps) => {
	return (
		<Text size="lg" fw={600} c="red" style={{ textAlign: 'center' }}>
			{message}
		</Text>
	)
}
export default ErrorMessage
