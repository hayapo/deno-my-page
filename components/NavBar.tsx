import { ThemeSwitchButton } from "../islands/ThemeSwitchButton.tsx";
import { LangSwitch } from "./LangSwitch.tsx";

type NavBarProps = {
  isJapanese: boolean;
  isAbout: boolean;
};

export function NavBar({ isJapanese, isAbout }: NavBarProps) {
  return (
    <>
      <nav class="w-full max-w-screen-lg py-7 px-4 font-mono flex items-center justify-between mx-auto">
        <div class="hidden md:flex md:flex-1">
          <LangSwitch
            isJapanese={isJapanese}
            isAbout={isAbout}
          />
        </div>
        <ul class="flex gap-[3rem] sm:gap-[7rem] mx-auto items-center justify-center">
          <li>
            <a
              href={isJapanese ? "/" : "/en"}
              class={`${
                isAbout ? "text-black dark:text-gray-100" : "text-gray-400"
              } text-3xl font-bold`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href={isJapanese ? "/career" : "/en/career"}
              class={`${
                isAbout ? "text-gray-400" : "text-black dark:text-gray-100"
              } text-3xl font-bold`}
            >
              Career
            </a>
          </li>
        </ul>
        <div class="hidden md:flex md:flex-1 md:justify-end">
          <ThemeSwitchButton />
        </div>
      </nav>
    </>
  );
}
