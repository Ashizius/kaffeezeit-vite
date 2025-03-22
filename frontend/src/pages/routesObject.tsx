import mainPage from './MainPage'
import recipePage from './RecipePage'
import {RouteObject} from 'react-router-dom'

export const routes:RouteObject[] = [
	{ index: true, ...mainPage },
  { path: '/recipe', ...recipePage },
];
