import React from "react";

import { PortalContext, IElement } from './portal.context.tsx';

interface IProps {
  children: React.ReactNode;
}

export const PortalProvider: React.FC<IProps> = ({ children }) => {
  const [components, setComponents] = React.useState<Record<string, React.ReactNode>>({});

  const addComponent = ({ name, component }: IElement) => {
    setComponents(prevComponents => ({
      ...prevComponents,
      [name]: component
    }));
  };

  const removeComponent = (name: string) => {
    setComponents(prevComponents => {
      const newComponents = { ...prevComponents };
      delete newComponents[name];
      return newComponents;
    });
  }

  return (
    <PortalContext.Provider value={{ addComponent, removeComponent }}>
      <React.Fragment>
        {children}
      </React.Fragment>
      <React.Fragment>
        {Object.entries(components).map(([name, Component]) => (
          Component
        ))}
      </React.Fragment>

    </PortalContext.Provider>
  );
}
