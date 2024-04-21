import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx";
import IconBrandMastodon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-mastodon.tsx";
import IconBrandDiscord from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-discord.tsx";
import { socials } from "../lib/index.ts";

export function SocialIcons() {
  const iconSize = 9;
  const socialIcons = [
    {
      name: "GitHub",
      icon: <IconBrandGithub className={`w-${iconSize} h-${iconSize} stroke-1`} />,
      url: `https://github.com/${socials.githubId}`,
    },
    {
      name: "Twitter",
      icon: <IconBrandTwitter className={`w-${iconSize} h-${iconSize} stroke-1`} />,
      url: `https://x.com/${socials.twitterId}`
    },
    {
      name: "Mastodon",
      icon: <IconBrandMastodon className={`w-${iconSize} h-${iconSize} stroke-1`} />,
      url: `https://mstdn.jp/@${socials.mastodonId}`,
    },
    {
      name: "Bluesky",
      icon: <BlueskyLogo />,
      url: `https://bsky.app/profile/${socials.blueskyId}`,
    },
    {
      name: "Discord",
      icon: <IconBrandDiscord className={`w-${iconSize} h-${iconSize} stroke-1`} />,
      url: `https://discordapp.com/users/${socials.discordId}`,
    },
    {
      name: "Zenn",
      icon: <ZennLogo />,
      url: `https://zenn.dev/${socials.zennId}`,
    }
  ];

  return (
    <div className="flex gap-4 items-center">
      {socialIcons.map((social) => (
        <a
          href={social.url}
          class="inline-block hover:text-gray-500 hover:dark:text-gray-400"
          key={social.name}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}


function BlueskyLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" />
    </svg>
  )
}

function ZennLogo() {
  return (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 88.3 88.3" style="enable-background:new 0 0 88.3 88.3;" xml-space="preserve">
  <g fill="#FFF">
    <path class="st0" d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9
      C2.8,82.5,3.2,83.3,3.9,83.3z"/>
    <path class="st0" d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1
      h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"/>
  </g>
  </svg>
  ) 
}