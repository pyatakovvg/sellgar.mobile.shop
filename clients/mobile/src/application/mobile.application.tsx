import {
  Application,
  type ApplicationConfiguratorInterface,
  NavigationBlockerFeature,
  NavigationBlockerPresentation,
  NotificationFeature,
  NotificationPresentation,
  UserRequestFeature,
  UserRequestPresentation,
} from '@sellgar/app/native';
import { UseBindings } from '@sellgar/app';

import { MainLayout } from '@layout/main';

import { Status } from './components/status';
import { Fallback } from './components/fallback';
import { Exception } from './components/exeption';

import { MobileBindings } from './bindings';
import { ApplicationLifecycleInitializer, ResolveSessionInitializer } from './initializers';
import { createMobileRouter } from './routes';
import { NavigationBlocker } from './presentations/navigation-blocker';
import { DestructiveNotification, InfoNotification, SuccessNotification } from './presentations/notification';
import { AlertUserRequest, ConfirmUserRequest, PromptUserRequest } from './presentations/user-request';
import { DrawerShell } from './shells/drawer';

@UseBindings(MobileBindings)
export class MobileApplication extends Application {
  protected configure(app: ApplicationConfiguratorInterface) {
    app.layouts([MainLayout]);

    app.components({
      exception: <Exception />,
      failed: <Exception />,
      fallback: <Fallback />,
      forbidden: <Status title="Forbidden" tone="error" />,
      notFound: <Status title="Route not found" tone="error" />,
      splash: <Status title="Starting core runtime" loading />,
    });

    app.routing({
      exception: <Exception />,
      fallback: <Fallback />,
      forbidden: <Status title="Nested route forbidden" tone="error" />,
      notFound: <Status title="Nested route not found" tone="error" />,
      shell: DrawerShell,
    });

    app.features([
      NavigationBlockerFeature.configure({
        presentation: NavigationBlockerPresentation.define(NavigationBlocker),
      }),
      NotificationFeature.configure({
        presentation: NotificationPresentation.define((registry) => {
          registry.destructive(DestructiveNotification);
          registry.info(InfoNotification);
          registry.success(SuccessNotification);
        }),
      }),
      UserRequestFeature.configure({
        presentation: UserRequestPresentation.define((registry) => {
          registry.alert(AlertUserRequest);
          registry.confirm(ConfirmUserRequest);
          registry.prompt(PromptUserRequest);
        }),
      }),
    ]);

    app.initializers([ResolveSessionInitializer, ApplicationLifecycleInitializer]);

    app.router(createMobileRouter());
  }
}
