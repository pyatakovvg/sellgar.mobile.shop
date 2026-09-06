import * as yup from 'yup';

export interface CheckPhoneFormValues {
  readonly phone: string;
}

export const checkPhoneSchema: yup.ObjectSchema<CheckPhoneFormValues> = yup.object({
  phone: yup
    .string()
    .required('Необходимо заполнить')
    .length(11, 'Необходимо заполнить')
    .matches(/^77\d{9}/, 'Неверный формат телефона'),
});
