import { JSX, lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs, useLoaderData } from 'react-router';
import { Loader } from '../../common/Loader/Loader';


async function loader({ /*params, request*/ }: LoaderFunctionArgs) {
  console.log('aaa');
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


const LazyPage = lazy(() =>
	import('./MainPage').then(module => ({
		default: module.MainPage
	}))
);

const Page = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<Loader/>}>
			<LazyPage  {...props}  />
		</Suspense>
	)
};

export default {
	loader,
	action,
	element: <Page />
};

