import '@mantine/core/styles.css'
import '@/styles/index.css'

import { MantineProvider, createTheme } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import AppRouter from '@/routes/AppRouter'

const theme = createTheme({
	primaryColor: 'green'
})

function App() {
	return (
		<>
			<MantineProvider theme={theme}>
				<RouterProvider router={AppRouter} />
			</MantineProvider>
		</>
	)
}

export default App
