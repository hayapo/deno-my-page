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
      <main class="max-w-screen-lg mx-auto flex flex-col px-9 lg:px-0 py-5">
        {children}
      </main>
      <Footer />
    </div>
  );
}
