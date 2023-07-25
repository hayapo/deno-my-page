type NavBarProps = {
  isAbout: boolean;
};

export function NavBar(props: NavBarProps) {
  const aboutStyle = props.isAbout ? "text-black" : "text-gray-400";
  const careerStyle = props.isAbout ? "text-gray-400" : "text-black";
  return (
    <nav class="p-7 font-mono">
      <div class="flex mx-auto justify-center items-center">
        <ul class="flex gap-[7em]">
          <li>
            <a href="/" class={`${aboutStyle} text-3xl font-bold`}>
              About
            </a>
          </li>
          <li>
            <a href="/career" class={`${careerStyle} text-3xl font-bold`}>
              Career
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
