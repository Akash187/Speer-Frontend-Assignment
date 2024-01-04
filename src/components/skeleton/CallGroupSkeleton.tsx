import { Skeleton, Stack } from '@mantine/core'

const CallGroupSkeleton = () => {
	return (
		<div>
			<Stack gap="md">
				<Skeleton height={24} width="100%" />
				<Skeleton height={48} width="100%" />
				<Skeleton height={48} width="100%" />
				<Skeleton height={48} width="100%" />
			</Stack>
		</div>
	)
}
export default CallGroupSkeleton
