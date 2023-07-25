import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { BioType } from "../../types/microcmsResponseType.ts";
import {
  calcAge,
  microcmsClient,
  parseStringToArray,
} from "../../lib/index.ts";

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
  const languageList = parseStringToArray(data.favoriteLanguage);
  const hobbyList = parseStringToArray(data.hobby);

  console.log(data);
  return (
    <>
      <Head>
        <title>{data.handleName}'s Page</title>
      </Head>
      <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center font-mono text-center">
        <img
          class="my-6 border-2 rounded-[30%] border-gray-400"
          src="/avator_icon.svg"
          width="300"
          height="300"
          alt="my avator icon: a pink hair girl with a black cloth"
        >
        </img>
        <div class="flex flex-col gap-2">
          <p class="text-5xl font-bold">{data.handleName}</p>
          <p class="text-2xl">
            {data.lastNameEn + " " + data.firstNameEn}
          </p>
        </div>
        <div class="mt-4 flex flex-col gap-10 text-2xl">
          <div class="flex flex-col gap-2">
            <p>age: {calcAge(data.dateOfBirth)}</p>
            <p>{data.currentJob}やってます</p>
            <p>@{data.whereLiving}</p>
          </div>
          <div class="mt-3 flex flex-col gap-3">
            <p>
              好きな言語: <br />
              {languageList.join(" / ")}
            </p>
            <p>
              趣味 <br />
              {hobbyList.join(" / ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
