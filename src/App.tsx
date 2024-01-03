import '@mantine/core/styles.css'

import { MantineProvider, createTheme } from '@mantine/core'
import Root from '@/components/layout/Root'

const theme = createTheme({
	primaryColor: 'green'
})

function App() {
	return (
		<>
			<MantineProvider theme={theme}>
				<Root />
			</MantineProvider>
		</>
	)
}

export default App
