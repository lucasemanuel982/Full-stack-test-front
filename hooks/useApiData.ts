'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { apiService, ApiUser } from '@/services/api';

export interface UseApiDataReturn {
  users: ApiUser[];
  loading: boolean;
  loadingType: 'idle' | 'fetching' | 'executing' | 'clearing';
  error: string | null;
  notification: string | null;
  notificationType: 'success' | 'error';
  execute: () => Promise<void>;
  clear: () => Promise<void>;
  refresh: () => Promise<void>;
}

export function useApiData(): UseApiDataReturn {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState<'idle' | 'fetching' | 'executing' | 'clearing'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  const hasInitializedRef = useRef(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setLoadingType('fetching');
    setError(null);
    
    try {
      const response = await apiService.getData();
      
      if (response.success) {
        setUsers(Array.isArray(response.data) ? response.data : []);
        setError(null); 
      } else {
        setError(response.error || 'Erro ao carregar dados');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
    } finally {
      setLoading(false);
      setLoadingType('idle');
    }
  }, []);

  const execute = useCallback(async () => {
    setLoading(true);
    setLoadingType('executing');
    setError(null);
    
    try {
      const response = await apiService.execute();
      
      if (response.success) {
        // Adicionar IDs sequenciais se não existirem
        const dataWithIds = Array.isArray(response.data) 
          ? response.data.map((user, index) => ({
              ...user,
              id: user.id || index + 1 // Usa ID existente ou gera sequencial
            }))
          : [];
        
        setUsers(dataWithIds);
        setError(null);
        setNotificationType('success');
        setNotification('Operation executed successfully!');
        setTimeout(() => setNotification(null), 3000);
      } else {
        setError(response.error || 'Erro ao executar operação');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
    } finally {
      setLoading(false);
      setLoadingType('idle');
    }
  }, []);

  const clear = useCallback(async () => {
    setLoading(true);
    setLoadingType('clearing');
    setError(null);
    
    try {
      const response = await apiService.clear();
      
      if (response.success) {
        setUsers([]);
        setError(null);
        setNotificationType('success');
        setNotification('Data cleared successfully!');
        setTimeout(() => setNotification(null), 3000);
      } else {
        setError(response.error || 'Erro ao limpar dados');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor');
    } finally {
      setLoading(false);
      setLoadingType('idle');
    }
  }, []);

  const refresh = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      fetchData();
    }
  }, []); 

  return {
    users,
    loading,
    loadingType,
    error,
    notification,
    notificationType,
    execute,
    clear,
    refresh,
  };
}
