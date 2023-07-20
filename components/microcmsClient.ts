import { createClient } from "microcms";

export const microcmsClient = createClient({
  serviceDomain: "hayaport",
  apiKey: `${Deno.env.get("X_MICROCMS_API_KEY")}`,
});
