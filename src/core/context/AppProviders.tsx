import React from 'react';
import { CartProvider } from '../../features/Cart/context/CartContext';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = props => {
  return (
    <CartProvider>
      {props.children}
    </CartProvider>
  );
};

export default AppProviders;
