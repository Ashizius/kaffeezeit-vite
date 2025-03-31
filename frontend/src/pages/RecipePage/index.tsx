import { JSX, lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs, useLoaderData } from 'react-router';
import { Loader } from '../../components/common/Loader';


async function loader({ /*params, request*/ }: LoaderFunctionArgs) {
	return Promise.resolve({
		result: 'OK'
	});
}

async function action({ params, request }: ActionFunctionArgs) {
	const data = await request.formData();
	const payload = Object.fromEntries(data.entries()) as object
	console.log('payload!',payload);
	return null; // вызов к апи
	//return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;


const LazyRecipePage = lazy(() =>
	import('./RecipePage').then(module => ({
		default: module.RecipePage
	}))
);

const RecipePage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<Loader/>}>
			<LazyRecipePage  {...props}  />
		</Suspense>
	)
};

export default {
	action,
	element: <RecipePage />
};

