import InfisicalClient from "infisical-node";

const infisicalClient = new InfisicalClient({
  token: Deno.env.get(INFISICAL_TOKEN)
});