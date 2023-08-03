import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-deno.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import { IconBrandFresh } from "./index.ts";
import { darkModeTextHover, lightModeTextHover } from "../lib/constants.ts";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="px-2 pb-4 font-mono text-center my-auto">
      <div class="flex flex-col gap-3 text-md items-center">
        <p>
          © {year} hayapo all rights reserved.
        </p>
        <div class="flex items-center justify-center gap-2">
          Build with
          <a
            href="https://deno.land/"
            class={`flex hover:underline gap-[2px] items-center hover:${lightModeTextHover} hover:dark:${darkModeTextHover}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Deno"
          >
            <IconBrandDeno
              aria-hidden="true"
              class="inline w-5 h-5"
            />
            Deno
          </a>
          &
          <a
            href="https://fresh.deno.dev/"
            class={`flex hover:underline gap-[2px] items-center hover:${lightModeTextHover} hover:dark:${darkModeTextHover}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fresh"
          >
            <IconBrandFresh class="inline w-5 h-5" />
            Fresh
          </a>
        </div>
        <a
          href="https://github.com/hayapo/deno-my-page"
          class={`inline-block hover:${lightModeTextHover} hover:dark:${darkModeTextHover}}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          alt="Link to GitHub of this page"
        >
          <IconBrandGithub class="w-7 h-7" />
        </a>
      </div>
    </footer>
  );
}
