import { Outlet } from 'react-router';

import { AppProvider } from '@/components/AppProvider';

import { Container } from './components/Container';
import { Header } from './components/Header';

export const AppLayout = () => {
  return (
    <AppProvider>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </AppProvider>
  );
};
