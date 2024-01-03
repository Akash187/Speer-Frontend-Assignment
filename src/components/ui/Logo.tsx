import { Center, Image } from '@mantine/core'
import logo from '@/assets/logo.svg'
import logoSmall from '@/assets/logo-small.svg'
import classes from '@/styles/Logo.module.css'

const Logo = () => {
	return (
		<Center>
			<Image
				visibleFrom="xs"
				style={{ height: '2.5rem', width: 'auto' }}
				src={logo}
			/>
			<Image className={classes.logoSmall} hiddenFrom="xs" src={logoSmall} />
		</Center>
	)
}
export default Logo
