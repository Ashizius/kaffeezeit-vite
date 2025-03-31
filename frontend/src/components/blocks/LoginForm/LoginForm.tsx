import clsx from 'clsx';
import styles from './LoginForm.module.scss';
import type {TloginFormData, TLoginFormProps} from './types.ts';
import { Form } from '../../common/Form';
import { Field } from '../../common/Form/Field';
import { useForm } from '../../common/Form/hooks.ts';

import { SubmitButton } from '../../common/Action/index.tsx';
import { InputEmail, InputPassword } from '../../common/Form/Input';

export function LoginForm({className, data, loadError, loading}:TLoginFormProps) {
  const {handleSubmit, error, changeValue, formErrors, isEmpty} = useForm<TloginFormData>(data, (data)=>console.log('submitted', data), loadError, loading)
  //const changeEmail = useCallback(changeValue('email'),[changeValue]);
  //const changePassword = useCallback(changeValue('password'),[changeValue]);
	return (
		<Form method='post' className={clsx(styles.container, className)} data-testid="LoginForm">
			<Field label='E-mail' error={formErrors.current.email}>
        <InputEmail value={data.email} onChange={changeValue}/>
      </Field>
      <Field label='password' error={formErrors.current.password}>
        <InputPassword value={data.password} onChange={changeValue}/>
      </Field>
      <p>{error}</p>
      <SubmitButton disabled={isEmpty}>Войти</SubmitButton>
		</Form>
	);
}

/*

      
*/