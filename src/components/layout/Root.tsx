import { AppShell, Container } from '@mantine/core'
import Header from '@/components/layout/Header'

const Root = () => {
	return (
		<AppShell header={{ height: 60 }} padding="md">
			<Header />
			<AppShell.Main>
				<Container>Hello World!</Container>
			</AppShell.Main>
		</AppShell>
	)
}
export default Root
