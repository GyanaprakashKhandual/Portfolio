// app/components/Providers.jsx
'use client';

import { Provider } from 'react-redux';
import { store } from '@/app/lib/store/store';
import { ThemeProvider } from '@/app/context/Theme.context';
import { Tooltip } from '@/app/components/ui/Tooltip.ui';
import NavbarWrapper from './Navbar.wrapper';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavbarWrapper />
        {children}
        <Tooltip />
      </ThemeProvider>
    </Provider>
  );
}