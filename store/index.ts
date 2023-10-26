import { create } from "zustand";

export const themeStore = create((set) => ({
  theme:
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme")
      : "dark",
  updateTheme: (newTheme: string) =>
    set((state: any) => ({
      theme: newTheme,
    })),
}));
