import IconGlobe from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/globe.tsx";

type LangSwitchProps = {
  className?: string;
  isJapanese: boolean;
  isAbout: boolean;
};

export function LangSwitch(
  { className, isJapanese, isAbout }: LangSwitchProps,
) {
  const [switchLinkJp, switchLinkEn] = CreateSwitchLink(isJapanese, isAbout);
  return (
    <div
      class={`flex gap-2 text-2xl font-mono font-semibold items-center justify-center ${className}`}
    >
      <IconGlobe class="w-8 h-8" />
      <div class="flex gap-1">
        <a
          href={switchLinkJp}
          class={`${
            isJapanese
              ? "text-white dark:text-gray-600 bg-gray-400 dark:bg-gray-200"
              : "text-black hover:text-gray-100 dark:text-gray-100"
          } border rounded-[30%] px-2 py-1 hover:bg-gray-400`}
        >
          jp
        </a>
        <a
          href={switchLinkEn}
          class={`${
            isJapanese
              ? "text-black hover:text-gray-100 dark:text-gray-100"
              : "text-white dark:text-gray-600 bg-gray-400 dark:bg-gray-200"
          } border rounded-[30%] px-2 py-1 hover:bg-gray-400`}
        >
          en
        </a>
      </div>
    </div>
  );
}

function CreateSwitchLink(isJapanese: boolean, isAbout: boolean) {
  if (isAbout) {
    return ["/", "/en"];
  } else {
    return ["/career", "/en/career"];
  }
}
