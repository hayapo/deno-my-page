import { AppProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import { NavBar } from "../components/NavBar.tsx";

export default function App({ Component, url }: AppProps) {
  return (
    <>
      <NavBar pathName={url.pathname} />
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
