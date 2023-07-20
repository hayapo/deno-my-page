import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { microcmsClient } from "../components/microcmsClient.ts";
import { BioType } from "../types/microcmsResponseType.ts";

export const handler: Handlers<BioType | null> = {
  async GET(_, ctx) {
    const bioData = await microcmsClient.get({
      endpoint: "bio_jp",
      queries: { limit: 99 },
    });
    return ctx.render(bioData);
  },
};

export default function Home({ data }: PageProps<BioType | null>) {
  if (!data) {
    return <h1>Bio data not found</h1>;
  }
  console.log(data);
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>{data.handleName}'s Page</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Welcome to fresh</h1>
          <p class="my-4">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
          <p>{data.currentStatus}</p>
          <Counter count={count} />
        </div>
      </div>
    </>
  );
}
