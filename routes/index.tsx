import { Handlers, PageProps } from "$fresh/server.ts";
import { ProfileType } from "../types/microcmsResponseType.ts";
import { microcmsClient, parseStringToArray } from "../lib/index.ts";
import { CustomHead as Head, SocialIcons } from "../components/index.ts";
import { darkModeColor } from "../lib/constants.ts";

const ENDPOINT = "profile_jp";
const cache: Record<string, ProfileType> = {};

export const handler: Handlers<ProfileType | null> = {
  async GET(_, ctx) {
    if (cache[ENDPOINT]) {
      return ctx.render(cache[ENDPOINT]);
    }

    const profileData = await microcmsClient.get({
      endpoint: ENDPOINT,
      queries: { limit: 99 },
    });
    cache[ENDPOINT] = profileData;
    return ctx.render(profileData);
  },
};

export default function About({ data }: PageProps<ProfileType | null>) {
  if (!data) return <h1>Bio data not found</h1>;
  const languageList = parseStringToArray(data.favoriteLanguage);
  const hobbyList = parseStringToArray(data.hobby);
  return (
    <>
      <Head title="Home" />
      <div class="flex flex-col gap-4 justify-center items-center text-center mx-auto">
        <Avator />
        <SocialIcons socials={data.socials} />
        <div class="flex flex-col gap-5">
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
      class={`border-4 rounded-[100%] border(gray-400 dark:${darkModeColor})`}
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
    <div class="flex flex-col gap-2 font-mono">
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
    <div class="flex flex-col gap-2 text-xl md:text-2xl font-mono">
      <p>{props.currentJob}やってます</p>
      <p>@{props.whereLiving}</p>
    </div>
  );
}

function Favorites(props: { languageList: string[]; hobbyList: string[] }) {
  return (
    <div class="flex flex-col gap-5 text-xl md:text-2xl font-mono">
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
