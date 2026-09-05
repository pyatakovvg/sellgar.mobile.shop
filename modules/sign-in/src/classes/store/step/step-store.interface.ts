export type TStep = 'SIGN_IN' | 'OTP_CODE';

export abstract class StepStoreInterface {
  abstract step: TStep;

  abstract nextStep(step: TStep): void;
}
