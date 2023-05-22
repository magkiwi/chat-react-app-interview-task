import axiosRequest, { AxiosResponse } from 'axios';
import { SERVER_URL } from 'config';
import { ConversationData } from 'contexts/WebSocketContext/WebSocketContext.types';
import { PaginatedResults } from 'shared/helpers/Query';


export const getHistoricalConversation = async (): Promise<AxiosResponse<PaginatedResults<ConversationData>>> =>{
    const options = {
        url: SERVER_URL,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': 'max-age=0',
        },
      }

    return axiosRequest(options).catch((e) => {
        throw(e);
      });
}

export const conversationClient = {
    getHistoricalConversation,
  };