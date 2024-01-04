import { Group, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

type IProps = {
	property: string
	value: string
}

const ShowCallProperty = ({ property, value }: IProps) => {
	const isMobile = useMediaQuery(`(max-width: 36em)`)

	return (
		<Group gap={isMobile ? '4px' : 'xs'}>
			<Text fw="bolder" fz="sm">
				{property}:
			</Text>
			<Text fz={isMobile ? 'sm' : 'md'}>{value}</Text>
		</Group>
	)
}
export default ShowCallProperty
