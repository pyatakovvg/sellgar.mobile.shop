import {
  AuthOtpRoute,
  BrandCreateRoute,
  BrandRoute,
  BrandsRoute,
  CheckPhoneRoute,
  ProductModifyRoute,
  ProductsRoute,
  PasswordResetOtpRoute,
  PasswordSetRoute,
  SetSignInCodeRoute,
  SignInRoute,
} from '@library/route-tokens';
import { param, segments } from '@sellgar/app';
import { Route, Router, ScreenAnimation } from '@sellgar/app/native';

import { MainTabsLayout } from '../../layouts/main-tabs/src';
import { RequireAnonymousSessionPolicy, RequireAuthenticatedSessionPolicy } from '../policies';

export const createMobileRouter = (): Router => {
  return new Router({
    routes: [createAnonymousBranch(), createAuthenticatedBranch()],
  });
};

const createAnonymousBranch = (): Route => {
  return new Route({
    canMatch: [RequireAnonymousSessionPolicy.configure().onFail(Router.redirectToSaved({ replace: true }))],
    defaultTo: CheckPhoneRoute,
    routes: [
      new Route({
        address: segments('check-phone'),
        token: CheckPhoneRoute,
        load: () => import('@module/check-phone'),
      }),
      new Route({
        address: segments('sign-in'),
        token: SignInRoute,
        load: () => import('@module/sign-in'),
      }),
      new Route({
        address: segments('otp'),
        token: AuthOtpRoute,
        load: () => import('@module/auth-otp'),
      }),
      new Route({
        address: segments('password-reset', 'otp', param('requestUuid')),
        token: PasswordResetOtpRoute,
        load: () => import('@module/password-reset-otp'),
      }),
      new Route({
        address: segments('password-set'),
        token: PasswordSetRoute,
        load: () => import('@module/password-set'),
      }),
      new Route({
        address: segments('set-sign-in-code'),
        token: SetSignInCodeRoute,
        load: () => import('@module/set-sign-in-code'),
      }),
    ],
  });
};

const createAuthenticatedBranch = (): Route => {
  return new Route({
    canMatch: [
      RequireAuthenticatedSessionPolicy.configure().onFail(
        Router.redirectTo(SignInRoute, {
          replace: true,
          saveCurrentLocation: true,
        }),
      ),
    ],
    defaultTo: Router.firstAvailable(),
    layouts: [MainTabsLayout],
    routes: [
      new Route({
        address: segments('products'),
        token: ProductsRoute,
        load: () => import('../../pages/products/src'),
        routes: [
          new Route({
            address: segments(param('uuid')),
            animation: ScreenAnimation.SlideFromRight,
            token: ProductModifyRoute,
            load: () => import('../../pages/product-detail/src'),
          }),
        ],
      }),
      new Route({
        address: segments('brands'),
        token: BrandsRoute,
        load: () => import('../../pages/brands/src'),
        routes: [
          new Route({
            token: BrandRoute,
            address: segments(param('uuid')),
            animation: ScreenAnimation.SlideFromRight,
            load: () => import('../../pages/brand/src'),
          }),
        ],
        routing: [
          new Router({
            routes: [
              new Route({
                address: segments('create'),
                token: BrandCreateRoute,
                load: () => import('../../pages/brand-create/src'),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
