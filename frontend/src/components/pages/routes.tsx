import mainPage from './MainPage'
import recipePage from './RecipePage'

export const routes = [
	{ index: true, ...mainPage },
  { path: '/recipe', ...recipePage },
];
