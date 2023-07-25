import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx";
import IconBrandMastodon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-mastodon.tsx";
import IconBrandDiscord from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-discord.tsx";
import { Socials } from "../types/microcmsResponseType.ts";

type SocialIconsProps = {
  class?: string;
  socials: Socials;
};

export function SocialIcons(props: SocialIconsProps) {
  const iconSize = 9;
  // TODO: 重複しているので、反復処理に変更する
  return (
    <div class={`flex gap-4 items-center ${props.class}`}>
      <a
        href="https://github.com/hayapo"
        class="inline-block hover:text-gray-500"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandGithub class={`w-${iconSize} h-${iconSize}`} />
      </a>
      <a
        href={props.socials.twitter}
        class="inline-block hover:text-gray-500"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandTwitter class={`w-${iconSize} h-${iconSize}`} />
      </a>
      <a
        href={props.socials.mastodon}
        class="inline-block hover:text-gray-500"
        aria-label="Mastodon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandMastodon class={`w-${iconSize} h-${iconSize}`} />
      </a>
      <a
        href={props.socials.discord}
        class="inline-block hover:text-gray-500"
        aria-label="Discord"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandDiscord class={`w-${iconSize} h-${iconSize}`} />
      </a>
    </div>
  );
}
