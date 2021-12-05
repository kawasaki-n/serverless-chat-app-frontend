import SendIcon from '@mui/icons-material/Send';
import { Container, IconButton, InputBase, Paper } from '@mui/material';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useWebSocketContext } from '@/providers/SocketProvider';

type InputProps = {
  message: string;
};

export const MessageForm: FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const webSocket = useWebSocketContext();
  useEffect(() => {
    if (webSocket) {
      webSocket.onopen = () => {};
    }
  });

  const onSubmit: SubmitHandler<InputProps> = ({ message }: InputProps) => {
    webSocket?.send(JSON.stringify({ data: message }));
    reset();
  };

  return (
    <Container>
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <InputBase
          {...register('message', { required: true })}
          placeholder="メッセージを入力してください。"
          sx={{ marginLeft: 2 }}
          fullWidth
        />
        <IconButton aria-label="send icon" type="submit" color="primary">
          <SendIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};
