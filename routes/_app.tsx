import { AppProps } from "$fresh/server.ts";
import { NavBar } from "../components/NavBar.tsx";

export default function App({ Component, url }: AppProps) {
  return (
    <>
      <NavBar pathName={url.pathname} />
      <Component />
    </>
  );
}
