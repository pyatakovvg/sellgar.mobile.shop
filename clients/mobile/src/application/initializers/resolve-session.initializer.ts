import {
  Initializer,
  type ApplicationInitializerContextInterface,
  type ApplicationInitializerInterface,
} from '@sellgar/app';

@Initializer()
export class ResolveSessionInitializer implements ApplicationInitializerInterface {
  execute(context: ApplicationInitializerContextInterface): void {
    context.session.setAuthenticated();
  }
}
