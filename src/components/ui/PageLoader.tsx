import { Box, Loader, Stack, Image } from '@mantine/core'
import logo from '@/assets/logo.svg'

const PageLoader = () => {
	return (
		<Box>
			<Stack h="calc(100vh - 120px)" justify="center" align="center" gap="xs">
				<Image style={{ height: '4rem', width: 'auto' }} src={logo} />
				<Loader variant="oval" />
			</Stack>
		</Box>
	)
}
export default PageLoader
