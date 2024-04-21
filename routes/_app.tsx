import { Head } from "$fresh/src/runtime/head.ts";
import { AppProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import { darkModeBg, darkModeColor, lightModeBg } from "../lib/constants.ts";

export default function App({ Component, url }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body>
        <Layout pathName={url.pathname}>
          <Component />
        </Layout>
      </body>
    </>
  );
}
