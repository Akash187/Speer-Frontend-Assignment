import { Notification, Transition } from '@mantine/core'
import { useTimeout } from '@mantine/hooks'
import useNotificationStore from '../../store/notificationStore'
import { IconCheck } from '@tabler/icons-react'

const AppNotification = () => {
	const { notification, notificationOpened, closeNotification } =
		useNotificationStore()

	const colorMap = {
		Success: 'green',
		Error: 'red',
		Info: 'blue'
	}

	const iconMap = {
		Success: IconCheck,
		Error: IconCheck,
		Info: IconCheck
	}

	const { start, clear } = useTimeout(closeNotification, notification.timeOut!)

	const Icon = iconMap[notification.type]

	return (
		<>
			<Transition
				mounted={notificationOpened}
				transition="slide-left"
				duration={400}
				exitDuration={200}
				onEnter={clear}
				onEntered={start}
				timingFunction="ease"
			>
				{(styles) => (
					<Notification
						w={360}
						onClose={closeNotification}
						style={{
							...styles,
							position: 'fixed',
							top: 16,
							right: 16,
							zIndex: 10000
						}}
						icon={<Icon size="1.1rem" />}
						color={colorMap[notification.type]}
						title={notification.type}
					>
						{notification.message}
					</Notification>
				)}
			</Transition>
		</>
	)
}
export default AppNotification
