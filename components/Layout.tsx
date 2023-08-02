import { LangSwitch } from "./LangSwitch.tsx";
import type { ComponentChildren } from "preact";
import { Footer } from "./Footer.tsx";
import { NavBar } from "./NavBar.tsx";

type LayoutProps = {
  pathName: string;
  children: ComponentChildren;
};

export function Layout({ pathName, children }: LayoutProps) {
  const isJapanese = pathName.substring(1, 3) !== "en";
  const isAbout = pathName === "/" || pathName === "/en";
  return (
    <div class="min-h-screen flex flex-col items-center">
      <NavBar isJapanese={isJapanese} isAbout={isAbout} />
      <div class="max-w-screen-lg mx-auto flex flex-col items-center px-12 lg:px-0 pb-10">
        <LangSwitch
          className="ml-auto"
          isJapanese={isJapanese}
          isAbout={isAbout}
        />
        {children}
      </div>
      <Footer />
    </div>
  );
}
