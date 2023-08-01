import type { ComponentChildren } from "preact";

type LayoutProps = {
  children: ComponentChildren;
};

export function Layout(props: LayoutProps) {
  return (
    <div class="max-w-screen-lg mx-auto flex flex-col items-center">
      {props.children}
    </div>
  );
}
