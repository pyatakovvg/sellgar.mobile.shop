import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { ConfigBinding } from '../infrastructure/config/config.binding.ts';
import { EventBinding } from '../infrastructure/event/event.binding.ts';
import { TimerBinding } from '../infrastructure/timer/timer.binding.ts';
import { BiometryBinding } from '../infrastructure/biometry/biometry.binding.ts';
import { DeviceInfoBinding } from '../infrastructure/device-info/device-info.binding.ts';
import { PushNotificationBinding } from '../infrastructure/push-notification/push-notification.binding.ts';
import { SecureStorageBinding } from '../infrastructure/secure-storage/secure-storage.binding.ts';
import { StorageBinding } from '../infrastructure/storage/storage.binding.ts';
import { RequestExecutorDelegateBinding } from '../infrastructure/request-executor-delegate/request-executor-delegate.binding.ts';
import { AuthBinding } from './auth/auth.binding.ts';
import { BalanceBinding } from './balance/balance.binding.ts';
import { BankCardsBinding } from './bank-cards/bank-cards.binding.ts';
import { ChangePhoneBinding } from './change-phone/change-phone.binding.ts';
import { CommissionBinding } from './commission/commission.binding.ts';
import { DepositBinding } from './deposit/deposit.binding.ts';
import { FeaturesBinding } from './features/features.binding.ts';
import { FormActionBinding } from './form-action/form-action.binding.ts';
import { IdentificationBinding } from './identification/identification.binding.ts';
import { MobileVersionBinding } from './mobile-version/mobile-version.binding.ts';
import { OperationLimitsBinding } from './operation-limits/operation-limits.binding.ts';
import { OperationBinding } from './operation/operation.binding.ts';
import { OtpBinding } from './otp/otp.binding.ts';
import { PartnerBinding } from './partner/partner.binding.ts';
import { PasswordBinding } from './password/password.binding.ts';
import { PayCategoryBinding } from './pay-category/pay-category.binding.ts';
import { PayMethodBinding } from './pay-method/pay-method.binding.ts';
import { ProfileBinding } from './profile/profile.binding.ts';
import { SessionBinding } from './session/session.binding.ts';
import { SignUpBinding } from './sign-up/sign-up.binding.ts';
import { TerminalBinding } from './terminal/terminal.binding.ts';
import { WithdrawalBinding } from './withdrawal/withdrawal.binding.ts';

export class DomainBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    new ConfigBinding().register(registry);
    new EventBinding().register(registry);
    new TimerBinding().register(registry);
    new BiometryBinding().register(registry);
    new DeviceInfoBinding().register(registry);
    new PushNotificationBinding().register(registry);
    new SecureStorageBinding().register(registry);
    new StorageBinding().register(registry);
    new RequestExecutorDelegateBinding().register(registry);
    new AuthBinding().register(registry);
    new BalanceBinding().register(registry);
    new BankCardsBinding().register(registry);
    new ChangePhoneBinding().register(registry);
    new CommissionBinding().register(registry);
    new DepositBinding().register(registry);
    new FeaturesBinding().register(registry);
    new FormActionBinding().register(registry);
    new IdentificationBinding().register(registry);
    new MobileVersionBinding().register(registry);
    new OperationLimitsBinding().register(registry);
    new OperationBinding().register(registry);
    new OtpBinding().register(registry);
    new PartnerBinding().register(registry);
    new PasswordBinding().register(registry);
    new PayCategoryBinding().register(registry);
    new PayMethodBinding().register(registry);
    new ProfileBinding().register(registry);
    new SessionBinding().register(registry);
    new SignUpBinding().register(registry);
    new TerminalBinding().register(registry);
    new WithdrawalBinding().register(registry);
  }
}
