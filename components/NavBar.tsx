type NavBarProps = {
  isJapanese: boolean;
  isAbout: boolean;
};

export function NavBar({ isJapanese, isAbout }: NavBarProps) {
  return (
    <nav class="p-7 font-mono">
      <div class="flex mx-auto justify-center items-center">
        <ul class="flex gap-[3em] sm:gap-[7em]">
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
