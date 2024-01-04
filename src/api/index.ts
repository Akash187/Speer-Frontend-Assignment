import { Call } from '@/types/index.types'
import { groupCallByDate } from '@/utils/helper'

const BASEURL = 'https://cerulean-marlin-wig.cyclic.app'

export const getInboxCalls = async () => {
	const res = await fetch(`${BASEURL}/activities`)
	const result: Call[] = await res.json()
	const inboxCall = result.filter((call) => !call.is_archived)
	return groupCallByDate(inboxCall)
}

export const getArchievedCalls = async () => {
	const res = await fetch(`${BASEURL}/activities`)
	const result: Call[] = await res.json()
	const archievedCall = result.filter((call) => call.is_archived)
	return groupCallByDate(archievedCall)
}

export const archieveCall = async (call_id: string) => {
	const response = await fetch(`${BASEURL}/activities/${call_id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			is_archived: true
		})
	})
	if (!response.ok) {
		throw Error('Failed to Archieve Call.')
	}

	return 'Succesfully Archieved Call.'
}

export const unarchieveCall = async (call_id: string) => {
	const response = await fetch(`${BASEURL}/activities/${call_id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			is_archived: false
		})
	})
	if (!response.ok) {
		throw Error('Failed to Unarchieve Call.')
	}

	return 'Succesfully Unarchieved Call.'
}
