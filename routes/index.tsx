import { Handlers, PageProps } from "$fresh/server.ts";
import { CustomHead as Head, SocialIcons } from "../components/index.ts";
import { 
  favouriteLanguages,
  hobbiesJa,
  darkModeColor 
} from "../lib/index.ts";

const ENDPOINT = "profile_jp";

export default function About() {
  return (
    <>
      <Head title="Home" />
      <div class="flex flex-col gap-4 justify-center items-center text-center mx-auto">
        <Avator />
        <SocialIcons />
        <div class="flex flex-col gap-5">
          <Name />
          <Bio/>
          <Favorites />
        </div>
      </div>
    </>
  );
}

function Avator() {
  return (
    <img
      class={`border-4 rounded-[100%] border(gray-400 dark:${darkModeColor})`}
      src="/profile.webp"
      width="250"
      height="250"
      alt="my avator icon: a pink hair girl with a black cloth"
    />
  );
}

function Name() {
  return (
    <div class="flex flex-col gap-2 font-mono">
      <p class="text-5xl font-bold">hayapo</p>
      <p class="text-2xl">
        Hayato Saito
      </p>
    </div>
  );
}

function Bio() {
  return (
    <div class="flex flex-col gap-2 text-xl md:text-2xl font-mono">
      <p>Web Engineer</p>
      <p>@Tokyo</p>
    </div>
  );
}

function Favorites() {
  return (
    <div class="flex flex-col gap-5 text-xl md:text-2xl font-mono">
      <p>
        <span class="bold">好きな言語: </span><br />
        {favouriteLanguages.join(" / ")}
      </p>
      <p>
        趣味: <br />
        {hobbiesJa.join(" / ")}
      </p>
    </div>
  );
}
