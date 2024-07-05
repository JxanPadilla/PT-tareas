import React from 'react';
import { useLocation } from 'react-router-dom';
import { Cabecera } from '../../componentes/contenedor/Cabecera';

export default function HeaderWrapper() {
  const location = useLocation();
  const hideHeaderPaths = ['/']; 

  if (hideHeaderPaths.includes(location.pathname)) {
    return null;
  }

  return <Cabecera />;
}

