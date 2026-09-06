import { AppState, type AppStateStatus } from 'react-native';

import {
  Initializer,
  type ApplicationInitializerContextInterface,
  type ApplicationInitializerInterface,
} from '@sellgar/app';

const MAX_BACKGROUND_DURATION_MS = 2 * 60_000;

@Initializer()
export class ApplicationLifecycleInitializer implements ApplicationInitializerInterface {
  execute(context: ApplicationInitializerContextInterface): void {
    let backgroundStartedAt: number | null = null;

    const handleStateChange = (state: AppStateStatus): void => {
      if (state === 'background') {
        backgroundStartedAt ??= Date.now();
        return;
      }

      if (state !== 'active' || backgroundStartedAt === null) {
        return;
      }

      const backgroundDuration = Date.now() - backgroundStartedAt;

      backgroundStartedAt = null;

      if (backgroundDuration >= MAX_BACKGROUND_DURATION_MS && context.session.phase === 'authenticated') {
        context.session.expire();
      }
    };

    const subscription = AppState.addEventListener('change', handleStateChange);

    context.disposables.add(() => {
      backgroundStartedAt = null;
      subscription.remove();
    });
  }
}
