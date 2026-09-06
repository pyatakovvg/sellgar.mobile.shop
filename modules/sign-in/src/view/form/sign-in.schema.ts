import * as yup from 'yup';

export interface SignInFormValues {
  readonly password: string;
}

export const signInSchema: yup.ObjectSchema<SignInFormValues> = yup.object({
  password: yup.string().min(6, 'Должен содержать минимум 6 знаков').required('Необходимо заполнить'),
});
