// src/authAtom.ts
import { atom } from 'recoil';

interface User {
  email: string;
}

export interface ApiError {
  error: string;
  message: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const authState = atom<AuthState>({
  key: 'authState',
  default: { isLoggedIn: false, user: null, loading: false, error: null },
});