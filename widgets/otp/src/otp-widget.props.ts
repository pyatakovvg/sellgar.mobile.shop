import type { OtpEntity } from '@library/domain';

export interface OtpWidgetProps {
  readonly data: OtpEntity;
  readonly onSuccess: () => Promise<void> | void;
  readonly phone: string;
  readonly token: string;
}
