import { JSX, lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs, useActionData, useLoaderData } from 'react-router';
import { mockLoginPage } from './mockData';
import { Loader } from '../../components/common/Loader';


async function loader({ /*params, request*/ }: LoaderFunctionArgs) {
	return Promise.resolve({
		data: {...mockLoginPage},
    loading: false,
    result: 'OK'
	});
}

async function action({ params, request }: ActionFunctionArgs) {
  const data = await request.formData();
	const payload = Object.fromEntries(data.entries()) as object
	console.log('!!!',payload);
  return Promise.resolve({
		result: 'OK',
		data: {...mockLoginPage},
    loading: false,
    error:'error'
	});
  //return Promise.reject({error:'error'})
	//return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;
export type actionResponse = Awaited<ReturnType<typeof action>>;


const LazyLoginPage = lazy(() =>
	import('./LoginPage').then(module => ({
		default: module.LoginPage
	}))
);

const LoginPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const loaderData = useLoaderData<loaderResponse>();
  const actionData = useActionData<actionResponse>();
  console.log('actionData',actionData);
	return (
		<Suspense fallback={<Loader/>}>
			<LazyLoginPage  {...props} {...loaderData} />
		</Suspense>
	)
};

export default {
	loader,
	action,
	element: <LoginPage />
};

