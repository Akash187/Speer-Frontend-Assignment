import CallGroupSkeleton from '@/components/skeleton/CallGroupSkeleton'
import { Skeleton, Stack } from '@mantine/core'

const ArchievedSkeleton = () => {
	return (
		<div>
			<Skeleton mb="xl" height={48} width="100%" radius="sm" />
			<Stack gap="xl">
				<CallGroupSkeleton />
				<CallGroupSkeleton />
			</Stack>
		</div>
	)
}
export default ArchievedSkeleton
