import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type Notification = {
	type: 'Success' | 'Error' | 'Info'
	message: string
	timeOut?: number
}

type State = {
	notificationOpened: boolean
	notification: Notification
	openNotification: (notification: Notification) => void
	closeNotification: () => void
}

const defaultValue: Notification = {
	type: 'Info',
	message: 'Welcome to AirCall',
	timeOut: 2000
}

const useNotificationStore = create<State>()(
	devtools(
		(set, get) => ({
			notification: defaultValue,
			notificationOpened: false,
			openNotification: (notification: Notification) => {
				// close existing notification before opening
				get().closeNotification()
				setTimeout(
					() =>
						set({
							notification: { timeOut: 3000, ...notification },
							notificationOpened: true
						}),
					100
				)
			},
			closeNotification: () => set({ notificationOpened: false })
		}),
		{
			enabled: process.env.NODE_ENV === 'development',
			name: 'NotificationStore'
		}
	)
)

export default useNotificationStore
