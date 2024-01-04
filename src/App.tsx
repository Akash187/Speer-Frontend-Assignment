import '@mantine/core/styles.css'
import '@/styles/index.css'
import { MantineProvider, createTheme } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import AppRouter from '@/routes/AppRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const theme = createTheme({
	primaryColor: 'green'
})

const queryClient = new QueryClient()

function App() {
	return (
		<>
			<MantineProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={false} />
					<RouterProvider router={AppRouter} />
				</QueryClientProvider>
			</MantineProvider>
		</>
	)
}

export default App
