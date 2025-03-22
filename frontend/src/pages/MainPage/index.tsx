import { JSX, lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs, useLoaderData } from 'react-router';
import { Loader } from '../../src/components/common/Loader';


async function loader({ /*params, request*/ }: LoaderFunctionArgs) {
	return Promise.resolve({
		result: 'OK'
	});
}

async function action({ /*params, request*/ }: ActionFunctionArgs) {
  return Promise.resolve({
		result: 'OK'
	});
	//return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;


const LazyMainPage = lazy(() =>
	import('./MainPage').then(module => ({
		default: module.MainPage
	}))
);

const MainPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<Loader/>}>
			<LazyMainPage  {...props}  />
		</Suspense>
	)
};

export default {
	loader,
	action,
	element: <MainPage />
};

