import { FC, ReactNode, createContext, useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useHistoricalConversations } from 'shared/hooks/useHistoricalConversation';
import { ContextProps, ConversationData } from './WebSocketContext.types';


export const defaultContext: ContextProps = {
    readyState: 0,
    sendJsonMessage: () => {},
    connectionStatus: 'Open',
    messages: [{
      id: 1,
      user_question: '',
      bot_answer: 'Hello. Ask me a question',
      created_at: String(new Date()),
    }],
  };

export const WebSocketContext = createContext(defaultContext);

export const WebSocketContextProvider: FC<{ children?: ReactNode }> = ({ children }) => { 

    const [messages, setMessages] = useState<ConversationData[]>(defaultContext.messages)


    const { readyState, sendJsonMessage } = useWebSocket("ws://127.0.0.1:8000/", {
    onOpen: () => {
      console.log("Connected!");
    },
    onClose: () => {
      console.log("Disconnected!");
    },
    // onMessage handler
    onMessage: (e) => {
      const data = JSON.parse(e.data);
      console.log(data);

      setMessages([...messages, data]);
      }
    })

    const connectionStatus = {
      [ReadyState.CONNECTING]: "Connecting",
      [ReadyState.OPEN]: "Open",
      [ReadyState.CLOSING]: "Closing",
      [ReadyState.CLOSED]: "Closed",
      [ReadyState.UNINSTANTIATED]: "Uninstantiated"
    }[readyState];

    const { historicalConversation } = useHistoricalConversations()

    useEffect(() => {
      setMessages(historicalConversation);
    }, [historicalConversation])

  
    return (
        <WebSocketContext.Provider
          value={{
              readyState,
              sendJsonMessage,
              connectionStatus,
              messages,
          }}
        >
          {children}
        </WebSocketContext.Provider>
    );
}