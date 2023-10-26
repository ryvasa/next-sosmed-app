import { create } from "zustand";

export const themeStore = create((set) => ({
  theme: "light",
  updateTheme: (newTheme: any) =>
    set((state: any) => ({
      theme: newTheme,
    })),
}));
