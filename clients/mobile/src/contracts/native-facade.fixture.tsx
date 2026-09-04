import React from 'react';
import { Text, View } from 'react-native';

import {
  Application,
  type ApplicationConfiguratorInterface,
  Layout,
  type LayoutViewProps,
  Module,
  NavigationBlockerFeature,
  NavigationBlockerPresentation,
  NotificationFeature,
  NotificationPresentation,
  Route,
  ScreenAnimation,
  Router,
  Shell,
  type ShellContextInterface,
  ShellInterface,
  Viewport,
  Widget,
  WidgetDefinition,
  WidgetHost,
  UserRequestFeature,
  UserRequestPresentation,
} from '@sellgar/app/native';

class FixtureRoute {}

@Layout({ view: ({ children }: LayoutViewProps) => <View>{children}</View> })
class FixtureLayout {}

@Module({ layouts: [FixtureLayout], view: () => <Text>module</Text> })
class FixtureModule {}

interface FixtureWidgetProps {
  readonly value: string;
}

@Widget<FixtureWidgetProps>({ view: ({ value }) => <Text>{value}</Text> })
class FixtureWidget extends WidgetDefinition<FixtureWidgetProps> {}

const FixtureShellView: React.FC<ShellContextInterface> = (props) => (
  <Viewport>
    <Viewport.Slot>{props.children}</Viewport.Slot>
  </Viewport>
);

const FixtureViewport: React.FC<React.PropsWithChildren> = (props) => (
  <Viewport>
    <Viewport.Slot grow>{props.children}</Viewport.Slot>
    <Viewport.Refreshable />
  </Viewport>
);

@Shell({ view: FixtureShellView })
class FixtureShell extends ShellInterface {}

const notification = NotificationFeature.configure({
  presentation: NotificationPresentation.define((registry) => registry.info(() => null)),
});
const navigationBlocker = NavigationBlockerFeature.configure({
  presentation: NavigationBlockerPresentation.define(() => null),
});
const userRequest = UserRequestFeature.configure({
  presentation: UserRequestPresentation.define((registry) => registry.alert(() => null)),
});

const router = new Router({
  routes: [
    new Route({
      animation: ScreenAnimation.Fade,
      load: async () => ({ FixtureModule }),
      token: FixtureRoute,
    }),
  ],
  shell: FixtureShell,
});

class FixtureApplication extends Application {
  protected configure(app: ApplicationConfiguratorInterface): void {
    app.components({ fallback: <Text>loading</Text> });
    app.features([navigationBlocker, notification, userRequest]);
    app.layouts([FixtureLayout]);
    app.router(router);
    app.routing({ fallback: <Text>loading nested route</Text> });
  }
}

const fixtureView = <WidgetHost props={{ value: 'fixture' }} token={FixtureWidget} />;

void FixtureApplication;
void FixtureViewport;
void fixtureView;
