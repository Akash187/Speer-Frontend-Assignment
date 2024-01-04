export type Call = {
	direction?: 'inbound' | 'outbound'
	from?: number
	via?: number
	to?: number
	call_type?: 'missed' | 'answered' | 'voicemail'
	duration: number
	is_archived: boolean
	id: string
	created_at: string
}

export type CallGroupByDate = {
	calls: Call[]
	groupDate: string
	order: number
}
