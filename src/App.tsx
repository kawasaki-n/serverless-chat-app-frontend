import React, { FC } from 'react';

import { AppProvider } from '@/providers/AppProvider';
import { AppRoute } from '@/routes';

const App: FC = () => {
  return (
    <AppProvider>
      <AppRoute />
    </AppProvider>
  );
};

export default App;
