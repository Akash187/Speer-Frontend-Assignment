import { Navigate, createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Root from '../components/layout/Root'
import ErrorPage from '../pages/ErrorPage'
import PageNotFound from '../pages/PageNotFound'
const Inbox = lazy(() => import('@/pages/Inbox'))
const Archived = lazy(() => import('@/pages/Archieved'))

const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Navigate to="/inbox" replace={true} /> },
			{
				path: '/inbox',
				element: <Inbox />
			},
			{
				path: '/archieved',
				element: <Archived />
			},
			{ path: '*', element: <PageNotFound /> }
		]
	}
])

export default AppRouter
