const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PWD_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{6,}$/;
const MAX_PWD_LEN = 20;
const MAX_EMAIL_LEN = 20;

const formValidators = {
	email: {
		validator: (value: string) =>
			value.length < MAX_EMAIL_LEN ? EMAIL_REGEX.test(value) : false,
		message: 'Укажите корректный email.',
	},
	password: {
		validator: (value: string) =>
			value.length < MAX_PWD_LEN ? PWD_REGEX.test(value) : false,
		message: 'Укажите пароль посложнее.',
	},
	confirmPassword: {
		validator: (value: [string, string]) => value[0] === value[1],
		message: 'пароли не сопадают',
	},
	login: {
		validator: (value: string) => value.length > 3,
		message: 'Введите имя подлиннее',
	},
};
type TReduceError<T extends object> = (
	error: Record<keyof T, string>
) => Record<keyof T, string>;

type TReduceFormError = (error: TFormError) => TFormError;

export type TFormError = {
	isEmpty: boolean;
	error: string;
};

export function validateForm<T extends object>(
	form: T,
	errors: Partial<Record<keyof T, string>>,
  inputName: keyof T
): [Partial<Record<keyof T, string>>, boolean] {
	const keys = Object.keys(form) as (keyof T)[];
	const validationResult: Partial<Record<keyof T, string>> = { ...errors };

	const isEmpty = keys.some((key) => {
    console.log(form[key]);
		if (typeof form[key] !== 'string') {
			return false;
		} else {
			return form[key] === '';
		}
	});
  if (form[inputName]===''){
    return [{...validationResult,[inputName]:undefined}, isEmpty];
  }
  if (isEmpty) {
    return [validationResult, isEmpty];
  }
	let confirmPassword: string | undefined;
  if (form[inputName]===''){
    return [validationResult, isEmpty];
  }
	keys.forEach((key) => {
		/*if (typeof form[key] !== 'string' || typeof form[key] !== 'number') {
			return;
		}*/
		switch (key) {
			case 'email':
			case 'e-mail':
				validationResult[key] = formValidators.email.validator(
					String(form[key])
				)
					? ''
					: formValidators.email.message;
				break;
			case 'password':
			case 'password1':
			case 'password2':
			case 'pass':
			case 'confirmPassword':
			case 'passwordConfirm':
				if (!confirmPassword) {
					confirmPassword = String(form[key]);
				} else {
					validationResult[key] = formValidators.confirmPassword.validator([
						String(form[key]),
						confirmPassword,
					])
						? ''
						: formValidators.confirmPassword.message;
					confirmPassword = undefined;
					break;
				}
				validationResult[key] = formValidators.password.validator(
					String(form[key])
				)
					? ''
					: formValidators.password.message;
				break;
			case 'name':
			case 'login':
				validationResult[key] = formValidators.password.validator(
					String(form[key])
				)
					? ''
					: formValidators.email.message;
				break;
			default:
				break;
		}
	});
	return [validationResult, isEmpty];
}
