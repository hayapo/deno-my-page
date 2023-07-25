import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { BioType } from "../types/microcmsResponseType.ts";
import { calcAge, microcmsClient, parseStringToArray } from "../lib/index.ts";
import { NavBar, SocialIcons } from "../components/index.ts";

export const handler: Handlers<BioType | null> = {
  async GET(_, ctx) {
    const bioData = await microcmsClient.get({
      endpoint: "bio_jp",
      queries: { limit: 99 },
    });
    return ctx.render(bioData);
  },
};

export default function About({ data }: PageProps<BioType | null>) {
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
      <NavBar isAbout={true} />
      <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center font-mono text-center">
        <img
          class="mt-3 border-2 rounded-[30%] border-gray-400"
          src="/avator_icon.svg"
          width="250"
          height="250"
          alt="my avator icon: a pink hair girl with a black cloth"
        />
        <SocialIcons socials={data.socials} class="my-5" />
        <div class="flex flex-col gap-7 text-2xl">
          <div class="flex flex-col gap-2">
            <p class="text-5xl font-bold">{data.handleName}</p>
            <p>
              {data.lastNameEn + " " + data.firstNameEn}
            </p>
          </div>
          <div class="flex flex-col gap-2 text-2xl">
            <p>age: {calcAge(data.dateOfBirth)}</p>
            <p>{data.currentJob}やってます</p>
            <p>@{data.whereLiving}</p>
          </div>
          <div class="flex flex-col gap-2 text-2xl">
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
