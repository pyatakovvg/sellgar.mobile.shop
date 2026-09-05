import * as React from 'react'

export interface IElement {
  name: string;
  component: React.ReactNode;
}
export const PortalContext = React.createContext({
  addComponent: (element: IElement) => { },
  removeComponent: (name: string) => { }
});
