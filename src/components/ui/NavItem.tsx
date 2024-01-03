import { Box, Group, Text } from '@mantine/core'
import classes from '@/styles/NavItem.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { TablerIconsProps } from '@tabler/icons-react'

type IProps = {
	title: string
	to: string
	icon: (props: TablerIconsProps) => JSX.Element
}

const NavItem = ({ title, to, icon: Icon }: IProps) => {
	const location = useLocation()

	return (
		<Box component={NavLink} to={to} className={classes.navItem}>
			<Group gap="xs">
				<Icon className={classes.icon} />
				<Text className={classes.title}>{title}</Text>
			</Group>
			<Box
				data-active={location.pathname === to}
				className={classes.underline}
			></Box>
		</Box>
	)
}

export default NavItem
