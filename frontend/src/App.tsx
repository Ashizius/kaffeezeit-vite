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
import { FormContextProvider } from './components/common/Form/FormContext';
import { Header } from './stories/Header';
import { Footer } from './components/layouts/Footer';
import { MainLayout } from './components/layouts/MainLayout';
//import { usePreviousClone } from './components/layout/Book/hooks';

function AppLayout() {
	const location = useLocation();
	const backgoundLocation = location.state?.backgound;
	console.log(backgoundLocation);

	//const { current, old, catchComponent } = usePreviousClone(<Outlet />, []);
	return (
		<>
			<MainLayout>
				<Outlet />
			</MainLayout>
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
