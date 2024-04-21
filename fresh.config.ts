import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { RenderFunction } from "$fresh/server.ts";

const render: RenderFunction = (ctx, render) => {
    const lang = ctx.url.pathname.substring(1, 3);
    ctx.lang = lang === "en" ? lang : "ja";
    render();
};

export default defineConfig({
    render,
    plugins: [tailwind()],
});
