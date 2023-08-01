import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx";
import IconBrandMastodon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-mastodon.tsx";
import IconBrandDiscord from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-discord.tsx";
import { Socials } from "../types/microcmsResponseType.ts";

type SocialIconsProps = {
  socials: Socials;
};

export function SocialIcons(props: SocialIconsProps) {
  const iconSize = 9;
  const socialIcons = [
    {
      name: "GitHub",
      icon: <IconBrandGithub className={`w-${iconSize} h-${iconSize}`} />,
      url: props.socials.github,
    },
    {
      name: "Twitter",
      icon: <IconBrandTwitter className={`w-${iconSize} h-${iconSize}`} />,
      url: props.socials.twitter,
    },
    {
      name: "Mastodon",
      icon: <IconBrandMastodon className={`w-${iconSize} h-${iconSize}`} />,
      url: props.socials.mastodon,
    },
    {
      name: "Discord",
      icon: <IconBrandDiscord className={`w-${iconSize} h-${iconSize}`} />,
      url: props.socials.discord,
    },
  ];

  return (
    <div className="flex gap-4 items-center">
      {socialIcons.map((social) => (
        <a
          href={social.url}
          class="inline-block hover:text-gray-500"
          key={social.name}
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
