import { Container, Stack } from '@mui/material';
import { FC } from 'react';

import { MessageBoard } from './MessageBoard';
import { MessageForm } from './MessageForm';

export const Chat: FC = () => {
  return (
    <Container>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <MessageBoard />
        <MessageForm />
      </Stack>
    </Container>
  );
};
