import { Shell, ShellInterface } from '@sellgar/app/native';

import { BackdropView } from './view/backdrop.view.tsx';
import { ShellView } from './view/shell.view.tsx';

@Shell({ backdrop: BackdropView, view: ShellView })
export class DrawerShell extends ShellInterface {}
