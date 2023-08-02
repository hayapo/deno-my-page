import IconGlobe from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/globe.tsx";

type LangSwitchProps = {
  className?: string;
  isJapanese: boolean;
  isAbout: boolean;
};

export function LangSwitch(
  { className, isJapanese, isAbout }: LangSwitchProps,
) {
  console.log(`isJapanese: ${isJapanese}`);
  console.log(`isAbout: ${isAbout}`);
  const [switchLinkJp, switchLinkEn] = CreateSwitchLink(isJapanese, isAbout);
  return (
    <div
      class={`relative flex gap-2 text-2xl font-mono font-semibold items-center justify-center ${className}`}
    >
      <IconGlobe class="w-8 h-8" />
      <div class="flex gap-1 text-gray-400">
        <a
          href={switchLinkJp}
          class={`${
            isJapanese ? "text-black bg-gray-200" : "text-gray-400"
          } border rounded-[30%] px-2 py-1 hover:bg-gray-200`}
        >
          jp
        </a>
        <a
          href={switchLinkEn}
          class={`${
            isJapanese ? "text-gray-400" : "text-black bg-gray-200"
          } border rounded-[30%] px-2 py-1 hover:bg-gray-200`}
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
