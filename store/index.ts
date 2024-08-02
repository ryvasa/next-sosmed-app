import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const themeStore = create(
  persist(
    (set, get) => ({
      theme:
        typeof window !== 'undefined'
          ? window.localStorage.getItem('theme')
          : 'dark',
      updateTheme: (newTheme: string) =>
        set((state: any) => ({
          theme: newTheme,
        })),
    }),
    {
      name: 'theme-storage',
    }
  )
);

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

export const threadStore = create(
  persist(
    (set, get) => ({
      threads: [],
      updateThreads: (newThread: any) =>
        set((state: any) => ({
          threads: newThread,
        })),
    }),
    {
      name: 'thread-storage',
    }
  )
);
