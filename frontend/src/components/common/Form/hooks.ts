import {
	FormEvent,
	SyntheticEvent,
	useCallback,
	useRef,
	useState,
} from 'react';
import { TFormError, validateForm } from '../../../utils/validateForm';

/*
type TReduceError<T extends object> = (
	error: Record<keyof T, string>
) => Record<keyof T, string>;
*/
export function useForm<T extends object>(
	data: T,
	callback: (data: T) => void,
	apiError: string | undefined,
	isLoading: boolean
) {
	const [formData, setFormData] = useState<T>(data);
	/*const [formErrors, setFormErrors] = useState<Record<keyof T, string>>(
		Object.keys(data).reduce((obj, key) => {
			obj[key as keyof T] = '';
			return obj as Record<keyof T, string>;
		}, {} as Record<keyof T, string>)
	);*/

	const formErrors = useRef<Partial<Record<keyof T, string>>>({});
	const formIsEmpty = useRef<boolean>(false);

	//const submitError = useSelector(selectFormError)?.message || '';
	//const inputError = validateForm<T>(formData, setFormErrors);
	/*const [submitError, setSubmitError] = useState<TFormError>({
		isEmpty: true,
		error: apiError || '',
	});*/

	const changeValue = useCallback((inputName: keyof T, val: T[keyof T]) => {
		setFormData((data) => {
			const newData = { ...data, [inputName]: val };
			[formErrors.current, formIsEmpty.current] = validateForm<T>(
				newData,
				formErrors.current,
				inputName as keyof T
			);
			return newData;
		});
	}, []);

	/*
  validateForm<T>(formData, setFormErrors, setFormError);
	//const isLoading = useSelector(selectUserSending);
*/

	let submitError = formIsEmpty.current ? 'заполните все поля' : '';
	const handleSubmit = (e: SyntheticEvent<FormEvent>) => {
		if (formIsEmpty.current) {
			e.preventDefault();
			submitError = 'заполните все поля';
		} else {
			isLoading || callback(data);
		}
	};
	return {
		handleSubmit,
		changeValue,
		error: isLoading ? '⏳' : apiError || submitError,
		formErrors,
		isEmpty: formIsEmpty.current,
	};
}
