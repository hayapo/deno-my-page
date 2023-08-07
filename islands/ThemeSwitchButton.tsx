import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

type ThemeSwitchButtonProps = {
  prev: "dark" | "light";
};

type Theme = "light" | "dark";
export function ThemeSwitchButton(props: ThemeSwitchButtonProps) {
  const systemisDark = window &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  function getTheme() {
    if (!IS_BROWSER) {
      return props.prev;
    }
    if (localStorage.theme === "dark") {
      return "dark";
    } else if (localStorage.theme) {
      return "light";
    }
    return systemisDark ? "dark" : "light";
  }

  function updateMode() {
    const w = window as unknown as { isDark: boolean };
    w.isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[w.isDark ? "add" : "remove"]("dark");
  }

  function toggleTheme() {
    if (theme === "dark") {
      setIsDark("light");
    } else {
      setIsDark("dark");
    }
  }
  const [theme, setIsDark] = useState(getTheme());

  useEffect(() => {
    localStorage.theme = theme;
    updateMode();
  }, [theme]);

  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        onInput={toggleTheme}
        value=""
        class="sr-only peer"
        checked={theme === "dark"}
      >
      </input>
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
      </div>
    </label>
  );
}
