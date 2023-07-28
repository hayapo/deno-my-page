type NavBarProps = {
  pathName: string;
};

export function NavBar({ pathName }: NavBarProps) {
  const isJapanese = pathName.substring(1, 3) !== "en";
  const isAbout = pathName === "/" || pathName === "/en";

  return (
    <nav class="p-7 font-mono">
      <div class="flex mx-auto justify-center items-center">
        <ul class="flex gap-[7em]">
          <li>
            <a
              href={isJapanese ? "/" : "/en"}
              class={`${
                isAbout ? "text-black" : "text-gray-400"
              } text-3xl font-bold`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href={isJapanese ? "/career" : "/en/career"}
              class={`${
                isAbout ? "text-gray-400" : "text-black"
              } text-3xl font-bold`}
            >
              Career
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
