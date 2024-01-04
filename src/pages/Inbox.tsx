import { getInboxCalls } from '@/api'
import InboxContainer from '@/components/inbox/InboxContainer'
import InboxSkeleton from '@/components/skeleton/InboxSkeleton'
import ErrorMessage from '@/components/ui/ErrorMessage'
import ResetCallButton from '@/components/ui/ResetCallButton'
import { useQuery } from '@tanstack/react-query'

const Inbox = () => {
	const { isLoading, isError, data } = useQuery({
		queryKey: ['inbox-calls'],
		queryFn: getInboxCalls
	})

	if (isLoading) {
		return <InboxSkeleton />
	}
	if (isError) {
		return <ErrorMessage message="Failed to fetch Data." />
	}
	if (data?.length === 0) {
		return <ResetCallButton />
	}
	if (data) {
		return <InboxContainer callGroups={data} />
	}

	return <div style={{ textAlign: 'center' }}>No calls found</div>
}
export default Inbox
