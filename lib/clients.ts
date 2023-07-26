//import InfisicalClient from "infisical-node";
import { createClient } from "microcms";

// export const infisicalClient = new InfisicalClient({
//   token: Deno.env.get(INFISICAL_TOKEN)
// });

export const microcmsClient = createClient({
  serviceDomain: "hayaport",
  apiKey: Deno.env.get("X_MICROCMS_API_KEY"),
});
