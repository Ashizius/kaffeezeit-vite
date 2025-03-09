import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
} from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import { Book } from './components/page/Book/Book';
import { AnchorContextProvider } from './components/common/Anchor/AnchorContext';
import { routes } from './components/pages/routes';
import { useCallback, useState } from 'react';
import { PageChangerContextProvider } from './contexts/PageChanger/PageChangerProvider';

function AppLayout() {
	const [pageNumber, setPageNumber] = useState(1);
	const changePage = useCallback(
		(inc: number) => {
			setPageNumber((page) => page + inc);
		},
		[setPageNumber]
	);
	return (
		<>
			<AnchorContextProvider LinkElement={Link}>
				<PageChangerContextProvider value={{ changer: changePage }}>
					<Book pageNumber={pageNumber}>
						<Outlet />
					</Book>
				</PageChangerContextProvider>
			</AnchorContextProvider>
		</>
	);
}

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: routes,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
