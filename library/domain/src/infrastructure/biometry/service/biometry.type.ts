import { BIOMETRY_TYPE_BIOMETRY, BIOMETRY_TYPE_FACE_ID, BIOMETRY_TYPE_TOUCH_ID } from './biometry-type.constants.ts';

export type TBiometry = typeof BIOMETRY_TYPE_BIOMETRY | typeof BIOMETRY_TYPE_TOUCH_ID | typeof BIOMETRY_TYPE_FACE_ID;
