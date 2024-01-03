import { Box, Text } from '@mantine/core'
import classes from '@/styles/NavItem.module.css'

type IProps = {
	title: string
	isActive: boolean
}

const NavItem = ({ title, isActive }: IProps) => {
	return (
		<Box className={classes.navItem}>
			<Text className={classes.title}>{title}</Text>
			<Box data-active={isActive} className={classes.underline}></Box>
		</Box>
	)
}

export default NavItem
