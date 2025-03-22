import { FC } from 'react';
import mainPage from './MainPage';
import recipePage from './RecipePage';
import { Route, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
	{ index: true, ...mainPage },
	{ path: '/recipe', ...recipePage },
];

export const modals: RouteObject[] = [
  {path:'/login', }
]