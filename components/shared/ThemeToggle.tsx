"use client";
import { themeStore } from "@/store";
import { Dark, Light } from "../ui/icons";
import { useEffect, useState } from "react";

const ThemeToggle = ({ showText }: any) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const { theme, updateTheme } = themeStore((state: any) => state);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    updateTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      {currentTheme === "light" ? (
        <button
          className={`flex justify-start items-center ${!showText && "shadow-sm hover:bg-primary/75 btn btn-circle btn-sm flex justify-center items-center bg-primary border-none"} `}
          onClick={() => {
            toggleTheme();
          }}
        >
          {showText ? <Light /> : <Light w={5} h={5} c={"white"} />}
          {showText && <p>Light mode</p>}
        </button>
      ) : (
        <button
          className={`flex justify-start items-center ${!showText && "shadow-sm hover:bg-primary/75 btn btn-circle btn-sm flex justify-center items-center bg-primary border-none"} `}
          onClick={() => {
            toggleTheme();
          }}
        >
          {showText ? <Dark /> : <Dark w={5} h={5} />}
          {showText && <p className="text-sm lg:text-md">Dark mode</p>}
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
