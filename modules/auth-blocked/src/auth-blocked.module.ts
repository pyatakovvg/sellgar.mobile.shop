import { UseBindings } from '@sellgar/app';
import { Module } from '@sellgar/app/native';

import { AuthBlockedBindings } from './classes/auth-blocked.bindings.ts';
import { AuthBlockedView } from './view/auth-blocked.view.tsx';

@UseBindings(AuthBlockedBindings)
@Module({ view: AuthBlockedView })
export class AuthBlockedModule {}
