import { Stack, Title, Image } from '@mantine/core'
import pageNotFound from '../assets/page-not-found.svg'

const PageNotFound = () => {
	return (
		<Stack align="center" pt="xl">
			<Title>Page Not Found</Title>
			<Image maw="40rem" src={pageNotFound} alt="error image" />
		</Stack>
	)
}
export default PageNotFound
