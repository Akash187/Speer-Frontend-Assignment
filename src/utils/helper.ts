import { Call, CallGroupByDate } from '@/types/index.types'
import { format } from 'date-fns'

export const groupCallByDate = (calls: Call[]) => {
	const group: { [key: string]: { calls: Call[]; order: number } } = {}
	calls.forEach((call) => {
		//filter out bad calls which are without from key
		if (call.from) {
			const groupDate = format(call.created_at, 'MMM, dd yyyy')

			//group call to particular group based on date
			if (groupDate in group) {
				group[groupDate].calls.push(call)
			} else {
				group[groupDate] = {
					calls: [call],
					order: Object.keys(group).length
				}
			}
		}
	})

	//add every group to array
	const groupArr: CallGroupByDate[] = []

	for (const key in group) {
		//arrange calls in desending order of time of day
		group[key].calls.reverse()

		groupArr.push({
			groupDate: key,
			...group[key]
		})
	}

	//sort groupArr to make sure calls are correctly ordered
	groupArr.sort((a, b) => {
		return b.order - a.order
	})

	return groupArr
}
