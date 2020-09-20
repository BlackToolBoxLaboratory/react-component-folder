import React from 'react';

const ComponentFolder = (props) => {
  const { children, components = [] } = props;
  let Rebuild = <>{children}</>;

  components.reverse();
  components.forEach((component) => {
    Rebuild = React.cloneElement(component, component.props, Rebuild);
  });
  return Rebuild;
};

export default ComponentFolder;
