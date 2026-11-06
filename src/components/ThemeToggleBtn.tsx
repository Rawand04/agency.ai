import { useEffect, type Dispatch, type SetStateAction } from "react";
import assets from "../assets/assets";

type ThemeToggleProps = {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
};

const ThemeToggleBtn = ({ setTheme, theme }: ThemeToggleProps) => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark",
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button>
      {theme === "dark" ? (
        <img
          src={assets.sun_icon}
          alt="dark"
          width={24}
          height={24}
          onClick={() => setTheme("light")}
          className="border border-gray-500 rounded-full size-8.5 p-1.5"
        />
      ) : (
        <img
          src={assets.moon_icon}
          alt="light"
          width={24}
          height={24}
          onClick={() => setTheme("dark")}
          className="border border-gray-500 rounded-full size-8.5 p-1.5"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
