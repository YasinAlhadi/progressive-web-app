import { atom } from 'nanostores';

export const token = atom<string | null>(null);
export const user = atom<string | null>(null);
export const isAuthenticated = atom<boolean>(false);

// Check if the user is authenticated
export const login = (token: string, user: string) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', user);
  isAuthenticated.set(true);
};

// Logout the user
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  isAuthenticated.set(false);
};
