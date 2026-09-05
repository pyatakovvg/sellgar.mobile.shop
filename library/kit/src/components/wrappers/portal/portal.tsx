import React, { useContext, useEffect } from "react";
import { PortalContext } from './portal.context.tsx';

interface IProps {
  children: React.ReactNode,
  name: string
}

export const Portal: React.FC<IProps> = ({ children, name }) => {
  const { addComponent,removeComponent } = useContext(PortalContext);
  useEffect(() => {
    addComponent({ name, component: children });
    return () => {
      removeComponent(name);
    };
  }, [children, name]);

  return null;
};
