import {
	createBrowserRouter,
	Form,
	Link,
	Outlet,
	Route,
	RouterProvider,
	Routes,
	useLocation,
} from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

//import { Book } from './components/layout/Book/Book';
import { AnchorContextProvider } from './components/common/Anchor/AnchorContext';
import { routes } from './pages/routes';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PageChangerContextProvider } from './contexts/PageChanger/PageChangerProvider';
import { FormContextProvider } from './components/common/Form/FormContext';
//import { usePreviousClone } from './components/layout/Book/hooks';

function AppLayout() {
	const location = useLocation();
	const [pageNumber, setPageNumber] = useState(1);
	const backgoundLocation = location.state?.backgound;
	console.log(backgoundLocation);
	const changePage = useCallback(
		(inc: number) => {
			setPageNumber((page) => page + inc);
		},
		[setPageNumber]
	);
    //const { current, old, catchComponent } = usePreviousClone(<Outlet />, []);
	return (
		<>
      <Outlet></Outlet>
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
	return (
		<>
			<AnchorContextProvider LinkElement={Link}>
				<FormContextProvider FormElement={Form}>
					<RouterProvider router={router} />
				</FormContextProvider>
			</AnchorContextProvider>
		</>
	);
}

export default App;
