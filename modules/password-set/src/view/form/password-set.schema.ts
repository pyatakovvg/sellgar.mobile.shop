import * as yup from 'yup';

export interface PasswordSetFormValues {
  readonly confirmPassword: string;
  readonly password: string;
}

export const passwordSetSchema: yup.ObjectSchema<PasswordSetFormValues> = yup
  .object({
    password: yup
      .string()
      .min(12, 'Должен содержать минимум 12 знаков')
      .matches(/^[^\u0400-\u04ff]*$/, 'Должен содержать только латинские буквы')
      .matches(/[a-z]/, 'Должен содержать хотя бы одну строчную букву')
      .matches(/[A-Z]/, 'Должен содержать хотя бы одну заглавную букву')
      .matches(/\d/, 'Должен содержать хотя бы одну цифру')
      .required('Необходимо заполнить'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Необходимо заполнить'),
  })
  .required();
