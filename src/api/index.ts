import { Call } from '@/types/index.types'
import { groupCallByDate } from '@/utils/helper'

const BASEURL = 'https://cerulean-marlin-wig.cyclic.app'

export const getInboxCalls = async () => {
	const res = await fetch(`${BASEURL}/activities`)
	const result: Call[] = await res.json()
	const inboxCall = result.filter((call) => !call.is_archived)
	return groupCallByDate(inboxCall)
}
