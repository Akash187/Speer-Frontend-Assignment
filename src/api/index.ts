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

export const archieveCalls = async (call_ids: string[]) => {
	const promises: Promise<string>[] = []
	call_ids.forEach((id) => {
		promises.push(archieveCall(id))
	})

	const response = await Promise.all(promises)

	if (!response) {
		throw Error('Failed to Archieve all calls.')
	}

	return 'Succesfully Archieved all calls.'
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

export const unarchieveCalls = async (call_ids: string[]) => {
	const promises: Promise<string>[] = []
	call_ids.forEach((id) => {
		promises.push(unarchieveCall(id))
	})

	const response = await Promise.all(promises)

	if (!response) {
		throw Error('Failed to unarchieve all calls.')
	}

	return 'Succesfully Unarchieved all calls.'
}

export const resetCalls = async () => {
	const response = await fetch(`${BASEURL}/reset`, {
		method: 'PATCH'
	})
	if (!response.ok) {
		throw Error('Failed to reset calls.')
	}

	return 'Succesfully reset calls.'
}
