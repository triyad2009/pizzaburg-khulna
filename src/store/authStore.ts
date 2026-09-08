import { create } from 'zustand';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Connect to backend
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'customer',
        createdAt: new Date(),
      };
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      set({ error: 'Login failed' });
    } finally {
      set({ isLoading: false });
    }
  },
  signup: async (email: string, password: string, name: string) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: Connect to backend
      const mockUser: User = {
        id: '1',
        email,
        name,
        role: 'customer',
        createdAt: new Date(),
      };
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      set({ error: 'Signup failed' });
    } finally {
      set({ isLoading: false });
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  clearError: () => {
    set({ error: null });
  },
}));
