import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { ProfileType } from "../types/microcmsResponseType.ts";
import { microcmsClient } from "../lib/index.ts";

const ENDPOINT = "profile_jp";
const cache: Record<string, ProfileType> = {};

export const handler: Handlers<ProfileType | null> = {
  async GET(_, ctx) {
    if (cache[ENDPOINT]) {
      console.log("returned from cache");
      return ctx.render(cache[ENDPOINT]);
    }

    const bioData = await microcmsClient.get({
      endpoint: ENDPOINT,
      queries: { limit: 99 },
    });
    cache[ENDPOINT] = bioData;
    console.log(`api called`);
    return ctx.render(bioData);
  },
};
export default function Career({ data }: PageProps<ProfileType | null>) {
  return (
    <>
      <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center font-mono text-center">
        <div class="text-4xl">Career Page (In Development)</div>
      </div>
    </>
  );
}
