import { Link } from 'react-router-dom'
import errorImage from '../assets/error.svg'
import { Button, Image, Stack, Title } from '@mantine/core'

const ErrorPage = () => {
	return (
		<Stack align="center" pt="xl">
			<Title>Something bad just happened...</Title>
			<Image maw="40rem" src={errorImage} alt="error image" />
			<Link
				target="_blank"
				to="https://github.com/Akash187/Speer-Frontend-Assignment/issues"
			>
				<Button>Report Issue</Button>
			</Link>
		</Stack>
	)
}
export default ErrorPage
