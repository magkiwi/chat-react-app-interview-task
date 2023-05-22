import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { cacheKeys } from 'config';
import { conversationClient } from 'clients/conversationClient';


export const useHistoricalConversations = () => {
  const { data: { data: historicalConversation } = {}, status, error } = useQuery(
    [cacheKeys.getHistoricalConversations],
    () => conversationClient.getHistoricalConversation(),
  );

  return {
    status,
    error: error as AxiosError,
    historicalConversation: historicalConversation?.results || [],
  };
};