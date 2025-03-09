import { JSX, lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs, useLoaderData } from 'react-router';


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


const LazyPage = lazy(() =>
	import('./RecipePage').then(module => ({
		default: module.RecipePage
	}))
);

const Page = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyPage  {...props}  />
		</Suspense>
	)
};

export default {
	loader,
	action,
	element: <Page />
};

