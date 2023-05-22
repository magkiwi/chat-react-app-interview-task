  export type ConversationData = {
    id: number;
    user_question: string;
    bot_answer: string;
    created_at: string;
  }

  export type ContextProps = {
    readyState: number;
    sendJsonMessage: (e: any) => any;
    connectionStatus: string;
    messages: ConversationData[];
  };
