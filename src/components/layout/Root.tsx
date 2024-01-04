import { AppShell, Container } from '@mantine/core'
import Header from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import PageLoader from '@/components/ui/PageLoader'
import AppNotification from '@/components/ui/AppNotification'

const Root = () => {
	return (
		<AppShell header={{ height: 60 }} padding="md">
			<Header />
			<AppNotification />
			<Suspense fallback={<PageLoader />}>
				<AppShell.Main px={0}>
					<Container size="sm">
						<Outlet />
					</Container>
				</AppShell.Main>
			</Suspense>
		</AppShell>
	)
}
export default Root
