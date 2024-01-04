import { getInboxCalls } from '@/api'
import InboxContainer from '@/components/inbox/InboxContainer'
import InboxSkeleton from '@/components/skeleton/InboxSkeleton'
import ErrorMessage from '@/components/ui/ErrorMessage'
import { useQuery } from '@tanstack/react-query'

const Inbox = () => {
	const { isLoading, isError, data } = useQuery({
		queryKey: ['inbox-calls'],
		queryFn: getInboxCalls
	})

	return (
		<div>
			{isLoading ? (
				<InboxSkeleton />
			) : isError ? (
				<ErrorMessage message="Failed to fetch Data." />
			) : data ? (
				<InboxContainer callGroups={data} />
			) : (
				'No calls found'
			)}
		</div>
	)
}
export default Inbox
