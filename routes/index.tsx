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
      <div class="max-w-screen-lg mx-auto flex flex-col gap-7 items-center justify-center font-mono text-center">
        <Avator />
        <SocialIcons socials={data.socials} />
        <div class="flex flex-col gap-10">
          <Name
            handleName={data.handleName}
            lastNameEn={data.lastNameEn}
            firstNameEn={data.firstNameEn}
          />
          <Bio
            dateOfBirth={data.dateOfBirth}
            currentJob={data.currentJob}
            whereLiving={data.whereLiving}
          />
          <Favorites languageList={languageList} hobbyList={hobbyList} />
        </div>
      </div>
    </>
  );
}

function Avator() {
  return (
    <img
      class="mt-3 border-2 rounded-[100%] border-gray-400"
      src="/avator_icon.svg"
      width="250"
      height="250"
      alt="my avator icon: a pink hair girl with a black cloth"
    />
  );
}

function Name(
  props: { handleName: string; lastNameEn: string; firstNameEn: string },
) {
  return (
    <div class="flex flex-col gap-2">
      <p class="text-5xl font-bold">{props.handleName}</p>
      <p class="text-2xl">
        {props.lastNameEn + " " + props.firstNameEn}
      </p>
    </div>
  );
}

function Bio(
  props: { dateOfBirth: string; currentJob: string; whereLiving: string },
) {
  return (
    <div class="flex flex-col gap-2 text-2xl">
      <p>age: {calcAge(props.dateOfBirth)}</p>
      <p>{props.currentJob}やってます</p>
      <p>@{props.whereLiving}</p>
    </div>
  );
}

function Favorites(props: { languageList: string[]; hobbyList: string[] }) {
  return (
    <div class="flex flex-col gap-5 text-2xl">
      <p>
        好きな言語: <br />
        {props.languageList.join(" / ")}
      </p>
      <p>
        趣味: <br />
        {props.hobbyList.join(" / ")}
      </p>
    </div>
  );
}
