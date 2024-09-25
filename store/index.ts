import { create } from "zustand";
import { persist } from "zustand/middleware";

export const themeStore = create(
  persist(
    (set, get) => ({
      theme: "light",
      updateTheme: (newTheme: string) =>
        set((state: any) => ({
          theme: newTheme,
        })),
    }),
    {
      name: "theme-storage",
    },
  ),
);

export const userStore = create(
  persist(
    (set, get) => ({
      user: {},
      updateUser: (newUser: any) =>
        set((state: any) => ({
          user: newUser,
        })),
    }),
    {
      name: "user-storage",
    },
  ),
);

export const chatsStore = create(
  persist(
    (set, get) => ({
      chats: [],
      updateChats: (newChat: any) =>
        set((state: any) => ({
          chats: newChat,
        })),
    }),
    {
      name: "chat-storage",
    },
  ),
);

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
      name: "thread-storage",
    },
  ),
);

export const messagesStore = create((set, get) => ({
  unreadedMessagess: 0,
  updateUnreadedMessages: (chatCount: any) =>
    set((state: any) => ({
      unreadedMessages: chatCount,
    })),
}));

// export const callStore = create(
//   persist(
//     (set, get) => ({
//       call: {},
//       updateCall: (newCall: any) =>
//         set((state: any) => ({
//           call: newCall,
//         })),
//     }),
//     {
//       name: "call-storage",
//     },
//   ),
// );

export const callStore = create((set, get) => ({
  call: {},
  calling: false,
  updateCall: (newCall: any) =>
    set((state: any) => ({
      call: newCall,
    })),
}));
