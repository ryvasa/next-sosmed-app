"use client";
import { Dark, Light } from "./icons";
import { useState } from "react";

const ThemeToggle = () => {
  const localTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState(localTheme);
  const htmlElment = document.querySelector("html");
  const update = (newTheme: string) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    if (newTheme === "light") {
      htmlElment?.classList.remove("dark");
    } else {
      htmlElment?.classList.remove("light");
    }
    htmlElment?.classList.add(newTheme);
  };

  return (
    <>
      {theme === "light" ? (
        <button
          className="flex justify-start items-center"
          onClick={() => {
            update("dark");
          }}
        >
          <Light w={4} h={4} />
          <p className="text-md text-dark-xl dark:text-dark-xs">Light mode</p>
        </button>
      ) : (
        <button
          className="flex justify-start items-center"
          onClick={() => {
            update("light");
          }}
        >
          <Dark w={4} h={4} />
          <p className="text-md text-dark-xl dark:text-dark-xs">Dark mode</p>
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
