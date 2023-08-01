import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-deno.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import { IconBrandFresh } from "./index.ts";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="p-2 font-mono text-center">
      <div class="flex flex-col gap-3 text-gray-400 text-md items-center">
        <p>
          © {year} hayapo all rights reserved.
        </p>
        <div class="flex items-center justify-center gap-2">
          Build with
          <a
            href="https://deno.land/"
            class="flex hover:underline hover:text-gray-600 gap-[2px] items-center"
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
            class="flex hover:underline hover:text-gray-600 gap-[2px] items-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fresh"
          >
            <IconBrandFresh class="inline w-5 h-5" />
            Fresh
          </a>
        </div>
        <a
          href="https://github.com/hayapo"
          class="inline-block hover:text-gray-600"
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
