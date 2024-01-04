import { getArchievedCalls } from '@/api'
import ArchievedContainer from '@/components/archieved/ArchievedContainer'
import ArchievedSkeleton from '@/components/skeleton/ArchievedSkeleton'
import ErrorMessage from '@/components/ui/ErrorMessage'
import { useQuery } from '@tanstack/react-query'

const Archieved = () => {
	const { isLoading, isError, data } = useQuery({
		queryKey: ['archieved-calls'],
		queryFn: getArchievedCalls
	})

	return (
		<div>
			{isLoading ? (
				<ArchievedSkeleton />
			) : isError ? (
				<ErrorMessage message="Failed to fetch Data." />
			) : data ? (
				<ArchievedContainer callGroups={data} />
			) : (
				'No calls found'
			)}
		</div>
	)
}
export default Archieved
