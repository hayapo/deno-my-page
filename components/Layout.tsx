import type { ComponentChildren } from "preact";

type LayoutProps = {
  children: ComponentChildren;
};

export function Layout(props: LayoutProps) {
  return (
    <div class="max-w-screen-lg mx-auto flex flex-col items-center px-12 lg:px-0 pb-10">
      {props.children}
    </div>
  );
}
