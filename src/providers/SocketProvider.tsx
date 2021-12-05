import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

const WebSocketContext = createContext<WebSocket | null>(null);
export const useWebSocketContext = (): WebSocket | null => useContext(WebSocketContext);

type SocketProviderProps = {
  children: ReactNode;
};

export const SocketProvider: FC<SocketProviderProps> = ({ children }: SocketProviderProps) => {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    if (!process.env.REACT_APP_WEB_SOCKET_URL) throw new Error('web socket url is not found!');
    setWebSocket(new WebSocket(process.env.REACT_APP_WEB_SOCKET_URL));
  }, []);
  return <WebSocketContext.Provider value={webSocket}>{children}</WebSocketContext.Provider>;
};
