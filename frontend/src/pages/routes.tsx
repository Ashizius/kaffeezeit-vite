import { FC, JSX } from 'react';
import mainPage from './MainPage';
import recipePage from './RecipePage';
import { Outlet, Route, RouteObject } from 'react-router-dom';
import { Modal } from '../components/layouts/Modal';
import loginPage from './LoginPage';
import { ErrorElement } from '../components/common/ErrorElement';

const makeModal = ({redirect,...routeObject}: ModalRouteObject):RouteObject => {
	const element = <Modal redirect={redirect}>{routeObject.element}</Modal>;
	let errorElement = routeObject.errorElement ? (
		<Modal>{routeObject.errorElement}</Modal>
	) : (
		<Modal>
			<ErrorElement />
		</Modal>
	);
	return { ...routeObject, element, errorElement };
};

const listModalPaths = (routeObject: RouteObject) => {
	if (routeObject.index) return '';
	const path = routeObject.path || '';
	return path;
};

type ModalRouteObject= RouteObject & {redirect:string}

export const authModals: ModalRouteObject[] = [{ path: 'login', ...loginPage, redirect: '/login'}];

/*export const modalRoute: RouteObject[] = [
	{
		path: 'modal',
		element: (
			<Modal>
				<Outlet />
			</Modal>
		),
		children: modals,
	},
];*/

export const authModalsRoutes: RouteObject[] = authModals.map(makeModal);
export const authModalsPaths = authModals.map(listModalPaths);

export const routes: RouteObject[] = [
	{ index: true, ...mainPage },
	{
		path: '/main',
		...mainPage,
		children: [...authModalsRoutes],
	},
  
	{ path: '/recipe', ...recipePage },
	{ path: '/login', ...loginPage },
];
