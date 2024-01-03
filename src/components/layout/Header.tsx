import Logo from '@/components/ui/Logo'
import NavItem from '@/components/ui/NavItem'
import ThemeButtom from '@/components/ui/ThemeButton'
import { AppShell, Container, Group } from '@mantine/core'

const Header = () => {
	return (
		<AppShell.Header>
			<Container h="100%">
				<Group h="100%" justify="space-between" style={{ flex: 1 }}>
					<Logo />
					<Group h="100%" gap="sm">
						<Group h="100%" gap="sm">
							<NavItem title="Inbox" isActive={true} />
							<NavItem title="Archived" isActive={false} />
						</Group>
						<ThemeButtom />
					</Group>
				</Group>
			</Container>
		</AppShell.Header>
	)
}
export default Header
