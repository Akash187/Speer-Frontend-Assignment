import Logo from '@/components/ui/Logo'
import NavItem from '@/components/ui/NavItem'
import ThemeButtom from '@/components/ui/ThemeButton'
import { AppShell, Container, Group } from '@mantine/core'
import { IconInbox, IconArchive } from '@tabler/icons-react'

const Header = () => {
	return (
		<AppShell.Header>
			<Container size="sm" h="100%">
				<Group h="100%" justify="space-between" style={{ flex: 1 }}>
					<Logo />
					<Group h="100%" gap="sm">
						<Group h="100%" gap="sm">
							<NavItem title="Inbox" to="/inbox" icon={IconInbox} />
							<NavItem title="Archived" to="/archieved" icon={IconArchive} />
						</Group>
						<ThemeButtom />
					</Group>
				</Group>
			</Container>
		</AppShell.Header>
	)
}
export default Header
