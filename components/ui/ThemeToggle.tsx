"use client";
import { themeStore } from "@/store";
import { Dark, Light } from "./icons";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themeStore((state: any) => state.theme));

  const update = (newTheme: string) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    if (newTheme === "light") {
      document.querySelector("html")?.classList.remove("dark");
    } else {
      document.querySelector("html")?.classList.remove("light");
    }
    document.querySelector("html")?.classList.add(newTheme);
  };

  useEffect(() => {
    document.querySelector("html")?.classList.add(theme);
  }, [theme]);

  return (
    <>
      {theme === "light" ? (
        <button
          className="flex justify-start items-center"
          onClick={() => {
            update("dark");
          }}
        >
          <Light />
          <p className=" text-dark-xl dark:text-dark-xs">Light mode</p>
        </button>
      ) : (
        <button
          className="flex justify-start items-center"
          onClick={() => {
            update("light");
          }}
        >
          <Dark />
          <p className=" text-dark-xl dark:text-dark-xs">Dark mode</p>
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
