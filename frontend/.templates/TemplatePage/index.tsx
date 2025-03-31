import { JSX, lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs, useActionData, useLoaderData } from 'react-router';
import { Loader } from '@components/common/Loader';
import React from 'react';


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
export type actionResponse = Awaited<ReturnType<typeof action>>;

const LazyTemplateName = lazy(() =>
	import('./TemplateName').then(module => ({
		default: module.TemplateName
	}))
);

const TemplateName = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const loaderData = useLoaderData<loaderResponse>();
  const actionData = useActionData<actionResponse>();
	return (
		<Suspense fallback={<Loader/>}>
			<LazyTemplateName  {...props} {...loaderData} />
		</Suspense>
	)
};

export default {
	loader,
	action,
	element: <TemplateName />
};

