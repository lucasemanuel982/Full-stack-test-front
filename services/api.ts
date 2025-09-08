const API_BASE_URL = 'https://full-stack-test-back.vercel.app';
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export interface ApiUser {
  id: number;
  nome: string;
  email: string;
  phone: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`,
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      };
    }
  }

  async getData(): Promise<ApiResponse<ApiUser[]>> {
    return this.request<ApiUser[]>('/api/data/get-data');
  }

  async execute(): Promise<ApiResponse<ApiUser[]>> {
    return this.request<ApiUser[]>('/api/data/execute', {
      method: 'POST',
    });
  }

  async clear(): Promise<ApiResponse<void>> {
    return this.request<void>('/api/data/clear', {
      method: 'POST',
    });
  }
}

export const apiService = new ApiService();
