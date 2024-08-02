import { create } from 'zustand';

export const themeStore = create((set) => ({
  theme:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('theme')
      : 'dark',
  updateTheme: (newTheme: string) =>
    set((state: any) => ({
      theme: newTheme,
    })),
}));

export const userStore = create((set) => ({
  user:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('user')
      : undefined,
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: newUser,
    })),
}));

export const chatsStore = create((set) => ({
  chats: [],
  updateChats: (newChat: any) =>
    set((state: any) => ({
      chat: newChat,
    })),
}));
