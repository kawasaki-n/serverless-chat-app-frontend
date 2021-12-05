import { Container, Paper, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { useWebSocketContext } from '@/providers/SocketProvider';

export const MessageBoard: FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const webSocket = useWebSocketContext();
  useEffect(() => {
    if (webSocket) {
      webSocket.onmessage = (e) => {
        const tmpMessages = messages.slice();
        tmpMessages.push(e.data);
        setMessages(tmpMessages);
      };
    }
  });
  return (
    <Container>
      <Paper sx={{ maxHeight: '100%' }}>
        {messages.map((msg, i) => {
          return <Typography key={i}>{msg}</Typography>;
        })}
      </Paper>
    </Container>
  );
};
