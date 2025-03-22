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


const LazyTemplateName = lazy(() =>
	import('./TemplateName').then(module => ({
		default: module.MainPage
	}))
);

const TemplateName = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<Loader/>}>
			<LazyTemplateName  {...props}  />
		</Suspense>
	)
};

export default {
	loader,
	action,
	element: <TemplateName />
};

