import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

const ThemeButtom = () => {
	const { colorScheme, setColorScheme } = useMantineColorScheme()
	const dark = colorScheme === 'dark'
	const isMobile = useMediaQuery(`(max-width: 36em)`)

	return (
		<ActionIcon
			variant="outline"
			color={dark ? 'yellow' : 'gray'}
			onClick={() => setColorScheme(dark ? 'light' : 'dark')}
			title="Toggle color scheme"
			size={isMobile ? 'md' : 'lg'}
		>
			{dark ? (
				<IconSun size={isMobile ? '1.25rem' : '1.5rem'} />
			) : (
				<IconMoonStars size={isMobile ? '1.25rem' : '1.5rem'} />
			)}
		</ActionIcon>
	)
}
export default ThemeButtom
