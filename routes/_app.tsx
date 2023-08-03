import { Head } from "$fresh/src/runtime/head.ts";
import { AppProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import { darkModeBg, darkModeColor, lightModeBg } from "../lib/constants.ts";

export default function App({ Component, url }: AppProps) {
  const code = `function global_dark() {
    window.isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[window.isDark ? 'add' : 'remove']("dark");
  }
  global_dark();`;

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      </Head>
      <body
        class={`bg-${lightModeBg} dark:bg-${darkModeBg} dark:text-${darkModeColor}`}
      >
        <Layout pathName={url.pathname}>
          <Component />
        </Layout>
      </body>
    </>
  );
}
