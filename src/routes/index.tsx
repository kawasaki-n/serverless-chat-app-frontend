import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router';

import { MainLayout } from '@/components/layout/MainLayout';
import { Chat } from '@/features/chat';
import { Demo } from '@/features/demo';

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div>
            <CircularProgress />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

const Empty = () => {
  return (
    <>
      <h2>Ooops, content is not found :( </h2>
    </>
  );
};

export const AppRoute = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/demo', element: <Demo /> },
        { path: '/chat', element: <Chat /> },
        { path: '*', element: <Empty /> },
      ],
    },
  ]);
  return <>{elements}</>;
};
