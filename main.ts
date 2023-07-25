/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { RenderFunction, start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindv1 from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";

const render: RenderFunction = (ctx, render) => {
  const lang = ctx.url.pathname.substring(1, 3);
  ctx.lang = lang === "en" ? lang : "ja";
  render();
};
await start(manifest, { render, plugins: [twindv1(twindConfig)] });
